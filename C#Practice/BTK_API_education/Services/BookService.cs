using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
                _logger.LogInfo($"Book with id: {id} doesn't exist in the database.");
                throw new ArgumentNullException(nameof(entity));
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
            return _manager.Book.GetBookById(id, trackChanges);
        }

        public void UpdateBook(int id, Book book, bool trackChanges)
        {
            // check entity
            var entity = _manager.Book.GetBookById(id, trackChanges);
            if (entity == null)
            {
                _logger.LogInfo($"Book with id: {id} doesn't exist in the database.");
                throw new ArgumentNullException(nameof(entity));
            }

            // check params
            if (book == null)
            {
                throw new ArgumentNullException(nameof(book));
            }

            // update entity
            entity.Title = book.Title;
            entity.Price = book.Price;
            
            _manager.Book.UpdateBook(entity);
            _manager.Save();
        }
    }
}