using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Entities.DTOs;
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
        private readonly IMapper _mapper;

        public BookService(IRepositoryManager manager, ILoggerService logger, IMapper mapper)
        {
            _manager = manager;
            _logger = logger;
            _mapper = mapper;
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

        public IEnumerable<BookDto> GetAllBooks(bool trackChanges)
        {
            var books = _manager.Book.GetAllBooks(trackChanges);
            return _mapper.Map<IEnumerable<BookDto>>(books);
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

        public void UpdateBook(int id, BookDtoForUpdate bookDtoForUpdate, bool trackChanges)
        {
            // check entity
            var entity = _manager.Book.GetBookById(id, trackChanges);
            if (entity == null)
            {
                throw new BookNotFoundException(id);
            }

            // check params

            // mapping
            // entity.Title = book.Title;
            // entity.Price = book.Price;
            entity = _mapper.Map<Book>(bookDtoForUpdate);
            
            _manager.Book.UpdateBook(entity);
            _manager.Save();
        }
    }
}