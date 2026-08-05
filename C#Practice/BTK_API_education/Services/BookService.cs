using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.Exceptions;
using Entities.Models;
using Repositories.Contracts;
using Services.Contracts;

namespace Services
{
    public class BookService : IBookService
    {
        private readonly IRepositoryManager _manager;
        private readonly ILoggerService _logger;

        public BookService(IRepositoryManager manager, ILoggerService logger)
        {
            _manager = manager;
            _logger = logger;
        }

        public Book CreateBook(Book book)
        {
            _manager.Book.CreateBook(book);
            _manager.Save();
            return book;
        }

        public void DeleteBook(int id, bool trackChanges)
        {
            // check entity
            var entity = _manager.Book.GetBookById(id, trackChanges);
            if (entity == null)
            {
                throw new BookNotFoundException(id);
            }

            _manager.Book.DeleteBook(entity);
            _manager.Save();
        }

        public IEnumerable<Book> GetAllBooks(bool trackChanges)
        {
            return _manager.Book.GetAllBooks(trackChanges);
        }

        public Book GetBookById(int id, bool trackChanges)
        {
            var book = _manager.Book.GetBookById(id, trackChanges);
            if (book == null)
            {
                throw new BookNotFoundException(id);
            }
            return book;
        }

        public void UpdateBook(int id, Book book, bool trackChanges)
        {
            // check entity
            var entity = _manager.Book.GetBookById(id, trackChanges);
            if (entity == null)
            {
                throw new BookNotFoundException(id);
            }

            // check params

            // update entity
            entity.Title = book.Title;
            entity.Price = book.Price;
            
            _manager.Book.UpdateBook(entity);
            _manager.Save();
        }
    }
}