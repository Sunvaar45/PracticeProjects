using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.DTOs;
using Entities.Exceptions;
using Entities.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Services.Contracts;

namespace Presentation.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly IServiceManager _manager;

        public BooksController(IServiceManager manager)
        {
            _manager = manager;
        }

        [HttpGet]
        public IActionResult GetBooks()
        {

            var books = _manager.BookService.GetAllBooks(false);
            return Ok(books);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetBookById([FromRoute] int id)
        {
            var book = _manager.BookService.GetBookById(id, false);
            return Ok(book);
        }

        [HttpPost]
        public IActionResult CreateBook([FromBody] BookDtoForInsertion bookDtoForInsertion)
        {
            if (bookDtoForInsertion == null)
            {
                return BadRequest("Book cannot be null.");
            }

            if (!ModelState.IsValid)
            {
                return UnprocessableEntity(ModelState);
            }

            var bookDto = _manager.BookService.CreateBook(bookDtoForInsertion);

            return StatusCode(201, bookDto); // 201 Created
        }

        [HttpPut("{id:int}")]
        public IActionResult UpdateBook([FromRoute] int id, [FromBody] BookDtoForUpdate bookDtoForUpdate)
        {
            if (bookDtoForUpdate == null)
            {
                return BadRequest("Book cannot be null.");
            }

            _manager.BookService.UpdateBook(id, bookDtoForUpdate, true);

            return NoContent(); // 204
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteBookById([FromRoute] int id)
        {
            _manager.BookService.DeleteBook(id, false);

            return NoContent(); // 204   
        }

        [HttpPatch("{id:int}")]
        public IActionResult PatchBook([FromRoute] int id, [FromBody] JsonPatchDocument<BookDto> bookPatch)
        {
            // check entity
            var bookDto = _manager.BookService.GetBookById(id, true);

            bookPatch.ApplyTo(bookDto);

            _manager.BookService.UpdateBook(id, 
                new BookDtoForUpdate()
                {
                    Id = bookDto.Id,
                    Title = bookDto.Title,
                    Price = bookDto.Price
                }, 
                true);

            return NoContent(); // 204
        }
    }
}