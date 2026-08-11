using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.DTOs;
using Entities.Models;
using Entities.RequestFeatures;

namespace Services.Contracts
{
    public interface IBookService
    {
        Task<(IEnumerable<BookDto> bookDtos, MetaData metaData)> GetAllBooksAsync(BookParameters bookParameters, bool trackChanges);

        Task<BookDto> GetBookByIdAsync(int id, bool trackChanges);

        Task<BookDto> CreateBookAsync(BookDtoForInsertion book);

        Task UpdateBookAsync(int id, BookDtoForUpdate bookDtoForUpdate, bool trackChanges);

        Task DeleteBookAsync(int id, bool trackChanges);
        
        Task<(BookDtoForUpdate bookDtoForUpdate, Book book)> GetOneBookForPatchAsync(int id, bool trackChanges);

        Task SaveChangesForPatchAsync(BookDtoForUpdate bookDtoForUpdate, Book book);
    }
}