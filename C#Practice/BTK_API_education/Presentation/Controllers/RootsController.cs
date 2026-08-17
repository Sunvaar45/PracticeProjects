using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.LinkModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;

namespace Presentation.Controllers
{
    [ApiController]
    [Route("api")]
    public class RootsController : ControllerBase
    {
        private readonly LinkGenerator _linkGenerator;

        public RootsController(LinkGenerator linkGenerator)
        {
            _linkGenerator = linkGenerator;
        }

        [HttpGet(Name = "GetRoot")]
        public async Task<IActionResult> GetRoot([FromHeader(Name = "Accept")] string mediaType)
        {
            if (mediaType.Contains("application/vnd.myapp.apiroot"))
            {
                var list = new List<Link>()
                {
                    new Link()
                    {
                        Href = _linkGenerator.GetUriByName(HttpContext, nameof(GetRoot), values: null),
                        Rel = "self",
                        Method = "GET"
                    },
                    new Link()
                    {
                        Href = _linkGenerator.GetUriByName(HttpContext, nameof(BooksController.GetBooksAsync), values: null),
                        Rel = "books",
                        Method = "GET"
                    },
                    new Link()
                    {
                        Href = _linkGenerator.GetUriByName(HttpContext, nameof(BooksController.CreateBookAsync), values: null),
                        Rel = "books",
                        Method = "POST"
                    },
                };
                return Ok(list);
            }

            return NoContent(); // 204
        }
    }
}