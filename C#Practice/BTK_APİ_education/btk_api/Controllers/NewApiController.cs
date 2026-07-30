using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using btk_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace btk_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NewApiController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetMessage()
        {
            var result = new ResponseModel
            {
                StatusCode = 200,
                Message = "Hello from the new API controller!"
            };

            return Ok(result);
        }
    }
}