using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bookDemo.Data;
using Microsoft.AspNetCore.Mvc;

namespace bookDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetBooks()
        {
            var books = ApplicationContext.Books;
            return Ok(books);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetBookById([FromRoute] int id)
        {
            var book = ApplicationContext
                .Books
                .Where(b => b.Id.Equals(id))
                .SingleOrDefault();

            if (book == null)
            {
                return NotFound(); // 40
            }

            return Ok(book);
        }
    }
}