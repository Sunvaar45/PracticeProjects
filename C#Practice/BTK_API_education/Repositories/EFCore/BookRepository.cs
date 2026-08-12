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
    public sealed class BookRepository : RepositoryBase<Book>, IBookRepository
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
    
        public async Task<PagedList<Book>> GetAllBooksAsync(BookParameters bookParameters, bool trackChanges)
        {
            var books = await FindAll(trackChanges)
                .FilterBooksByPrice(bookParameters.MinPrice, bookParameters.MaxPrice)
                .Search(bookParameters.SearchTerm)
                .OrderBy(b => b.Title)
                .ToListAsync();

            return PagedList<Book>.ToPagedList(books, bookParameters.PageNumber, bookParameters.PageSize);
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