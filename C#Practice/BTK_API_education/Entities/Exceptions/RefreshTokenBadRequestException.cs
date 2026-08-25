using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Entities.Exceptions
{
    public class RefreshTokenBadRequestException : BadRequestException
    {
        public RefreshTokenBadRequestException() : 
            base("Refresh token is invalid or has expired. Please login again.")
        {
        }
    }
}