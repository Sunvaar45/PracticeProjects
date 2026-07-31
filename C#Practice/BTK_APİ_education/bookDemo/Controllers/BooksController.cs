using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bookDemo.Data;
using bookDemo.Models;
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

        [HttpPost]
        public IActionResult CreateBook([FromBody] Book book)
        {
            try
            {
                if (book == null)
                {
                    return BadRequest("Book cannot be null.");
                }

                ApplicationContext.Books.Add(book);
                return StatusCode(201, book); // 201 Created
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }   

        [HttpPut("{id:int}")]
        public IActionResult UpdateBook([FromRoute] int id, [FromBody] Book book)
        {
            // check book?
            var entity = ApplicationContext
                .Books
                .Find(b => b.Id.Equals(id));

            if (entity == null)
            {
                return NotFound(); // 404
            }

            // check id?
            if (id != book.Id)
            {
                return BadRequest("Book ID mismatch.");
            }

            ApplicationContext.Books.Remove(entity);
            book.Id = entity.Id;
            ApplicationContext.Books.Add(book);
            return Ok(book);
        }
    }
}