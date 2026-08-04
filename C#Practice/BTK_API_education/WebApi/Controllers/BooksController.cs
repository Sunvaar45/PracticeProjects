using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Entities.Models;
using Repositories.EFCore;
using Repositories.Contracts;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly IRepositoryManager _manager;

        public BooksController(IRepositoryManager manager)
        {
            _manager = manager;
        }

        [HttpGet]
        public IActionResult GetBooks()
        {
            try
            {
                var books = _manager.Book.GetAllBooks(false);
                return Ok(books);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult GetBookById([FromRoute] int id)
        {
            try
            {
                var book = _manager.Book.GetBookById(id, false);

                if (book == null)
                {
                    return NotFound(); // 40
                }

                return Ok(book);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
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

                _manager.Book.CreateBook(book);
                _manager.Save();

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
            try
            {
                // check book?
                var entity = _manager.Book.GetBookById(id, true);

                if (entity == null)
                {
                    return NotFound(); // 404
                }

                // check id?
                if (id != book.Id)
                {
                    return BadRequest("Book ID mismatch.");
                }

                entity.Title = book.Title;
                entity.Price = book.Price;
                _manager.Save();

                return Ok(book);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteBookById([FromRoute] int id)
        {
            try
            {
                var entity = _manager.Book.GetBookById(id, false);

                if (entity == null)
                {
                    return NotFound(new
                    {
                        statusCode = 404,
                        Message = $"Book with ID {id} not found."
                    }); // 404
                }

                _manager.Book.DeleteBook(entity);
                _manager.Save();

                return NoContent(); // 204   
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPatch("{id:int}")]
        public IActionResult PatchBook([FromRoute] int id, [FromBody] JsonPatchDocument<Book> bookPatch)
        {
            try
            {
                // check entity
                var entity = _manager.Book.GetBookById(id, true);

                if (entity == null)
                {
                    return NotFound();
                }

                bookPatch.ApplyTo(entity);
                _manager.Book.UpdateBook(entity);
                _manager.Save();

                return NoContent(); // 204
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}