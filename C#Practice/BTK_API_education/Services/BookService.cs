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

        public BookDto CreateBook(BookDtoForInsertion bookDtoForInsertion)
        {
            var book = _mapper.Map<Book>(bookDtoForInsertion);

            _manager.Book.CreateBook(book);
            _manager.Save();

            return _mapper.Map<BookDto>(book);
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

        public BookDto GetBookById(int id, bool trackChanges)
        {
            var book = _manager.Book.GetBookById(id, trackChanges);
            if (book == null)
            {
                throw new BookNotFoundException(id);
            }
            return _mapper.Map<BookDto>(book);
        }

        public void UpdateBook(int id, BookDtoForUpdate bookDtoForUpdate, bool trackChanges)
        {
            // check entity
            var book = _manager.Book.GetBookById(id, trackChanges);
            if (book == null)
            {
                throw new BookNotFoundException(id);
            }

            // check params

            // mapping
            // book.Title = bookDtoForUpdate.Title;
            // book.Price = bookDtoForUpdate.Price;
            book = _mapper.Map<Book>(bookDtoForUpdate);
            
            _manager.Book.UpdateBook(book);
            _manager.Save();
        }
    }
}