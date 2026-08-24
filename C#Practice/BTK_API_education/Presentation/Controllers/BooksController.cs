using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Entities.DTOs;
using Entities.Exceptions;
using Entities.Models;
using Entities.RequestFeatures;
using Marvin.Cache.Headers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Presentation.ActionFilters;
using Services.Contracts;

namespace Presentation.Controllers
{
    [ServiceFilter(typeof(LogFilterAttribute))] 
    [ApiController]
    [Route("api/books")]
    // [HttpCacheExpiration(CacheLocation = CacheLocation.Public, MaxAge = 80)]
    public class BooksController : ControllerBase
    {
        private readonly IServiceManager _manager;

        public BooksController(IServiceManager manager)
        {
            _manager = manager;
        }

        [Authorize]
        [HttpHead]
        [HttpGet(Name = "GetBooksAsync")]
        [ServiceFilter(typeof(ValidateMediaTypeAttribute))]
        public async Task<IActionResult> GetBooksAsync([FromQuery] BookParameters bookParameters)
        {
            var linkParameters = new LinkParameters()
            {
                BookParameters = bookParameters,
                HttpContext = HttpContext
            };

            var linkCollection = await _manager.BookService.GetAllBooksAsync(linkParameters, false);

            Response.Headers["X-Pagination"] = JsonSerializer.Serialize(linkCollection.metaData);

            if (linkCollection.linkResponse.HasLinks)
            {
                return Ok(linkCollection.linkResponse.LinkedEntities);
            }
            return Ok(linkCollection.linkResponse.ShapedEntities);
        }

        [Authorize]
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetBookByIdAsync([FromRoute] int id)
        {
            var book = await _manager.BookService.GetBookByIdAsync(id, false);
            return Ok(book);
        }

        [Authorize(Roles = "Editor, Admin")]
        [ServiceFilter(typeof(ValidationFilterAttribute))]
        [HttpPost(Name = "CreateBookAsync")]
        public async Task<IActionResult> CreateBookAsync([FromBody] BookDtoForInsertion bookDtoForInsertion)
        {
            var bookDto = await _manager.BookService.CreateBookAsync(bookDtoForInsertion);
            return StatusCode(201, bookDto); // 201 Created
        }

        [Authorize(Roles = "Editor, Admin")]
        [ServiceFilter(typeof(ValidationFilterAttribute))]
        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateBookAsync([FromRoute] int id, [FromBody] BookDtoForUpdate bookDtoForUpdate)
        {
            await _manager.BookService.UpdateBookAsync(id, bookDtoForUpdate, false);
            return NoContent(); // 204
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteBookByIdAsync([FromRoute] int id)
        {
            await _manager.BookService.DeleteBookAsync(id, false);
            return NoContent(); // 204   
        }

        [Authorize(Roles = "Editor, Admin")]
        [HttpPatch("{id:int}")]
        public async Task<IActionResult> PatchBookAsync([FromRoute] int id, 
            [FromBody] JsonPatchDocument<BookDtoForUpdate> bookPatch)
        {
            if (bookPatch == null)
            {
                return BadRequest("Book patch cannot be null.");
            }

            var result = await _manager.BookService.GetOneBookForPatchAsync(id, false);

            // apply patch and validate
            bookPatch.ApplyTo(result.bookDtoForUpdate, ModelState);
            TryValidateModel(result.bookDtoForUpdate);
            if (!ModelState.IsValid)
            {
                return UnprocessableEntity(ModelState);
            }

            await _manager.BookService.SaveChangesForPatchAsync(result.bookDtoForUpdate, result.book);

            return NoContent(); // 204
        }

        [Authorize]
        [HttpOptions]
        public IActionResult GetBooksOptions()
        {
            Response.Headers.Add("Allow", "GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD");
            return Ok();
        }
    }
}