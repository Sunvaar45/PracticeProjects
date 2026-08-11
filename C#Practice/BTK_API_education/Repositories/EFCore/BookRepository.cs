using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.Models;
using Repositories.Contracts;
using Microsoft.EntityFrameworkCore;
using Entities.RequestFeatures;

namespace Repositories.EFCore
{
    public class BookRepository : RepositoryBase<Book>, IBookRepository
    {
        public BookRepository(RepositoryContext context) : base(context)
        {

        }

        public void CreateBook(Book book)
        {
            Create(book);
        }

        public void DeleteBook(Book book)
        {
            Delete(book);
        }

        public async Task<IEnumerable<Book>> GetAllBooksAsync(BookParameters bookParameters, bool trackChanges)
        {
            return await FindAll(trackChanges)
                .OrderBy(b => b.Title)
                .Skip((bookParameters.PageNumber - 1) * bookParameters.PageSize)
                .Take(bookParameters.PageSize)
                .ToListAsync();
        }

        public async Task<Book> GetBookByIdAsync(int id, bool trackChanges)
        {
            return await FindByCondition(b => b.Id.Equals(id), trackChanges)
                .SingleOrDefaultAsync();
        }

        public void UpdateBook(Book book)
        {
            Update(book);
        }
    }
}