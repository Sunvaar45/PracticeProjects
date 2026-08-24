using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.DTOs;
using Microsoft.AspNetCore.Mvc;
using Presentation.ActionFilters;
using Services.Contracts;

namespace Presentation.Controllers
{
    [ApiController]
    [Route("api/authentication")]
    public class AuthenticationController : ControllerBase
    {
        private readonly IServiceManager _serviceManager;

        public AuthenticationController(IServiceManager serviceManager)
        {
            _serviceManager = serviceManager;
        }

        [HttpPost("register")]
        [ServiceFilter(typeof(ValidationFilterAttribute))]
        public async Task<IActionResult> RegisterUserAsync([FromBody] UserDtoForRegistration userDtoForRegistration)
        {
            var result = await _serviceManager
                .AuthenticationService
                .RegisterUserAsync(userDtoForRegistration);

            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.TryAddModelError(error.Code, error.Description);
                }
                return BadRequest(ModelState);
            }

            return StatusCode(201);
        }

        [HttpPost("login")]
        [ServiceFilter(typeof(ValidationFilterAttribute))]
        public async Task<IActionResult> AuthenticateUserAsync([FromBody] UserDtoForAuthentication userDtoForAuthentication)
        {
            if (!await _serviceManager.AuthenticationService.ValidateUserAsync(userDtoForAuthentication))
            {
                return Unauthorized(); // 401
            }

            return Ok(
                new {
                    Token = await _serviceManager.AuthenticationService.CreateTokenAsync() 
                }
            );
        }
    }
}