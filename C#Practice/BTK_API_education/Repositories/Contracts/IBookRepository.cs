using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.Models;
using Entities.RequestFeatures;

namespace Repositories.Contracts
{
    public interface IBookRepository : IRepositoryBase<Book>
    {
        Task<IEnumerable<Book>> GetAllBooksAsync(BookParameters bookParameters, bool trackChanges);

        Task<Book> GetBookByIdAsync(int id, bool trackChanges);

        void CreateBook(Book book);

        void UpdateBook(Book book);

        void DeleteBook(Book book);
    }
}