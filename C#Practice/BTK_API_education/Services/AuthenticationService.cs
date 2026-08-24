using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
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

        public async Task<string> CreateTokenAsync()
        {
            var signingCredentials = GetSigningCredentials();
            
            var claims = await GetClaimsAsync();

            var tokenOptions = GenerateTokenOptions(signingCredentials, claims);

            return new JwtSecurityTokenHandler().WriteToken(tokenOptions);
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
    }
}