using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Net.Http.Headers;

namespace Presentation.ActionFilters
{
    public class ValidateMediaTypeAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var acceptHeaderPresent = context.HttpContext
                .Request
                .Headers
                .ContainsKey("Accept");

            if (!acceptHeaderPresent)
            {
                context.Result = new BadRequestObjectResult($"Accept header is missing.");
                return; // 400
            }

            var mediaType = context.HttpContext
                .Request
                .Headers["Accept"]
                .FirstOrDefault();

            if (!MediaTypeHeaderValue.TryParse(mediaType, out MediaTypeHeaderValue? parsedMediaType))
            {
                context.Result = new BadRequestObjectResult($"Invalid media type in Accept header: {mediaType}");
                return; // 400
            }

            context.HttpContext.Items.Add("AcceptHeaderMediaType", parsedMediaType);
        }
    }
}