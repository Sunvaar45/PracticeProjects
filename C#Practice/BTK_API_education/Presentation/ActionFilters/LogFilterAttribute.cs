using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.LogModel;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Routing;
using Services.Contracts;

namespace Presentation.ActionFilters
{
    public class LogFilterAttribute : ActionFilterAttribute
    {
        private readonly ILoggerService _logger;

        public LogFilterAttribute(ILoggerService logger)
        {
            _logger = logger;
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            _logger.LogInfo(Log("OnActionExecuting", context.RouteData));
        }

        private string Log(string modelName, RouteData routeData)
        {
            var logDetails = new LogDetails()
            {
                ModelName = modelName,
                Controller = routeData.Values["controller"],
                Action = routeData.Values["action"],
            };

            var idKey = routeData.Values.Keys.FirstOrDefault(k => k.EndsWith("id", StringComparison.OrdinalIgnoreCase));
            if (idKey != null)
            {
                logDetails.Id = routeData.Values[idKey];
            }

            return logDetails.ToString();
        }
    }
}