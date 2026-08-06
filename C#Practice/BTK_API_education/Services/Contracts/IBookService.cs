using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.DTOs;
using Entities.Models;

namespace Services.Contracts
{
    public interface IBookService
    {
        IEnumerable<BookDto> GetAllBooks(bool trackChanges);

        BookDto GetBookById(int id, bool trackChanges);

        BookDto CreateBook(BookDtoForInsertion book);

        void UpdateBook(int id, BookDtoForUpdate bookDtoForUpdate, bool trackChanges);

        void DeleteBook(int id, bool trackChanges);
    }
}