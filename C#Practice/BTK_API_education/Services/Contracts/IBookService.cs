using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using Entities.DTOs;
using Entities.LinkModels;
using Entities.Models;
using Entities.RequestFeatures;

namespace Services.Contracts
{
    public interface IBookService
    {
        Task<(LinkResponse linkResponse, MetaData metaData)> GetAllBooksAsync(LinkParameters linkParameters, bool trackChanges);

        Task<List<Book>> GetAllBooksAsync(bool trackChanges);

        Task<BookDto> GetBookByIdAsync(int id, bool trackChanges);

        Task<BookDto> CreateBookAsync(BookDtoForInsertion book);

        Task UpdateBookAsync(int id, BookDtoForUpdate bookDtoForUpdate, bool trackChanges);

        Task DeleteBookAsync(int id, bool trackChanges);
        
        Task<(BookDtoForUpdate bookDtoForUpdate, Book book)> GetOneBookForPatchAsync(int id, bool trackChanges);

        Task SaveChangesForPatchAsync(BookDtoForUpdate bookDtoForUpdate, Book book);

        Task<IEnumerable<Book>> GetBooksWithDetailsAsync(bool trackChanges);
    }
}