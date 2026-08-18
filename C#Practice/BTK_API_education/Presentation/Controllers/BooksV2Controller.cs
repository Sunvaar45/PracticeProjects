using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Services.Contracts;

namespace Presentation.Controllers
{
    [ApiVersion("2.0", Deprecated = true)]
    [ApiController]
    [Route("api/books")]
    public class BooksV2Controller : ControllerBase
    {
        private readonly IServiceManager _manager;

        public BooksV2Controller(IServiceManager manager)
        {
            _manager = manager;
        }

        [HttpGet]
        public async Task<IActionResult> GetBooksAsync()
        {
            var books = await _manager.BookService.GetAllBooksAsync(trackChanges: false);
            var booksV2 = books.Select(b => new
            {
                Id = b.Id,
                Title = b.Title,
            });
            return Ok(booksV2);
        }
    }
}