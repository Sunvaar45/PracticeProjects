using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

namespace WebApi.Extensions
{
    public static class ApplicationBuilderExtensions
    {
        public static void ValidateAutoMapper(this WebApplication app)
        {
            var mapper = app.Services.GetRequiredService<IMapper>();
            mapper.ConfigurationProvider.AssertConfigurationIsValid();
        }
    }
}