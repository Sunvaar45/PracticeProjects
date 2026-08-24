using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.DTOs;
using Microsoft.AspNetCore.Identity;

namespace Services.Contracts
{
    public interface IAuthenticationService
    {
        Task<IdentityResult> RegisterUserAsync(UserDtoForRegistration userDtoForRegistration);

        Task<bool> ValidateUserAsync(UserDtoForAuthentication userDtoForAuthentication);

        Task<TokenDto> CreateTokenAsync(bool populateExp);
    }
}