using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Entities.DTOs;
using Entities.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Services.Contracts;

namespace Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly ILoggerService _logger;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
        private readonly IConfiguration _configuration;
        
        private User? _user; 

        public AuthenticationService(ILoggerService logger, IMapper mapper, UserManager<User> userManager, IConfiguration configuration)
        {
            _logger = logger;
            _mapper = mapper;
            _userManager = userManager;
            _configuration = configuration;
        }

        public async Task<TokenDto> CreateTokenAsync(bool populateExpiry)
        {
            var signingCredentials = GetSigningCredentials();   
            var claims = await GetClaimsAsync();
            var tokenOptions = GenerateTokenOptions(signingCredentials, claims);
            var accessToken = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

            var refreshToken = GenerateRefreshToken();
            _user.RefreshToken = refreshToken;

            var jwtSettings = _configuration.GetSection("JwtSettings");
            if (populateExpiry)
            {
                _user.RefreshTokenExpiryTime = DateTime.Now.AddDays(Convert.ToDouble(jwtSettings["refreshTokenExpiryInDays"]));
            }
            await _userManager.UpdateAsync(_user);

            return new TokenDto
            {
                AccessToken = accessToken,
                RefreshToken = refreshToken
            };
        }

        public async Task<IdentityResult> RegisterUserAsync(UserDtoForRegistration userDtoForRegistration)
        {
            var user = _mapper.Map<User>(userDtoForRegistration);

            var result = await _userManager.CreateAsync(user, userDtoForRegistration.Password);

            if (result.Succeeded)
            {
                await _userManager.AddToRolesAsync(user, userDtoForRegistration.Roles);
            }
            
            return result;
        }

        public async Task<bool> ValidateUserAsync(UserDtoForAuthentication userDtoForAuthentication)
        {
            bool result;
            _user = await _userManager.FindByNameAsync(userDtoForAuthentication.UserName);
        
            if (_user != null && await _userManager.CheckPasswordAsync(_user, userDtoForAuthentication.Password))
                result = true;
            else
                result = false;
        
            if (!result)
                _logger.LogWarning($"{nameof(ValidateUserAsync)}: Authentication failed. Wrong user name or password.");
            
            return result;
        }

        public async Task<TokenDto> RefreshTokenAsync(TokenDto tokenDto)
        {
            var principal = GetPrincipalFromExpiredToken(tokenDto.AccessToken);
            var user = await _userManager.FindByNameAsync(principal.Identity.Name);

            if (user == null ||
                user.RefreshToken != tokenDto.RefreshToken ||
                user.RefreshTokenExpiryTime <= DateTime.Now)
            {
                throw new RefreshTokenBadRequestException();
            }

            _user = user;
            return await CreateTokenAsync(populateExpiry: false);
        }

        private SigningCredentials GetSigningCredentials()
        {
            var jwtSettings = _configuration.GetSection("JwtSettings");
            var secretKey = Encoding.UTF8.GetBytes(jwtSettings["secretKey"]);
            var signingKey = new SymmetricSecurityKey(secretKey);
            return new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);
        }

        private async Task<List<Claim>> GetClaimsAsync()
        {
            var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.Name, _user.UserName)
            };

            var roles = await _userManager.GetRolesAsync(_user);

            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            return claims;
        }

        private JwtSecurityToken GenerateTokenOptions(SigningCredentials signingCredentials, List<Claim> claims)
        {
            var jwtSettings = _configuration.GetSection("JwtSettings");

            var tokenOptions = new JwtSecurityToken(
                issuer: jwtSettings["validIssuer"],
                audience: jwtSettings["validAudience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(Convert.ToDouble(jwtSettings["expiryInMinutes"])),
                signingCredentials: signingCredentials
            );
            return tokenOptions;
        }

        private string GenerateRefreshToken() // Cryptographically secure random number generator to create a refresh token
        {
            var randomNumber = new byte[32];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomNumber);
                return Convert.ToBase64String(randomNumber);
            }
        }

        private ClaimsPrincipal GetPrincipalFromExpiredToken(string token)
        {
            var jwtSettings = _configuration.GetSection("JwtSettings");
            var secretKey = Encoding.UTF8.GetBytes(jwtSettings["secretKey"]);

            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = false, // We want to get claims from expired token
                ValidateIssuerSigningKey = true,
                ValidIssuer = jwtSettings["validIssuer"],
                ValidAudience = jwtSettings["validAudience"],
                IssuerSigningKey = new SymmetricSecurityKey(secretKey)
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            SecurityToken securityToken;

            var principal = tokenHandler.ValidateToken(token, tokenValidationParameters,
                out securityToken);

            var jwtSecurityToken = securityToken as JwtSecurityToken;
            if (jwtSecurityToken == null ||
                !jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
            {
                throw new SecurityTokenException("Invalid token");
            }

            return principal;
        }
    }
}