using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Entities.DTOs
{
    public record TokenDto
    {
        public string accessToken { get; init; }
        public string refreshToken { get; init; }
    }
}