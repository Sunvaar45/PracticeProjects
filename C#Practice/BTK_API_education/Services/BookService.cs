using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Entities.DTOs;
using Entities.Exceptions;
using Entities.LinkModels;
using Entities.Models;
using Entities.RequestFeatures;
using Repositories.Contracts;
using Services.Contracts;

namespace Services
{
    public class BookService : IBookService
    {
        private readonly IRepositoryManager _manager;
        private readonly ILoggerService _logger;
        private readonly IMapper _mapper;
        private readonly IBookLinks _bookLinks;

        public BookService(IRepositoryManager manager, ILoggerService logger, IMapper mapper, IBookLinks bookLinks)
        {
            _manager = manager;
            _logger = logger;
            _mapper = mapper;
            _bookLinks = bookLinks;
        }

        public async Task<BookDto> CreateBookAsync(BookDtoForInsertion bookDtoForInsertion)
        {
            var book = _mapper.Map<Book>(bookDtoForInsertion);

            _manager.Book.CreateBook(book);
            await _manager.SaveAsync();

            return _mapper.Map<BookDto>(book);
        }

        public async Task DeleteBookAsync(int id, bool trackChanges)
        {
            // check entity
            var book = await GetBookByIdAndCheckIfItExistsAsync(id, trackChanges);

            _manager.Book.DeleteBook(book);
            await _manager.SaveAsync();
        }

        public async Task<(LinkResponse linkResponse, MetaData metaData)> 
            GetAllBooksAsync(LinkParameters linkParameters,
            bool trackChanges)
        {
            if (!linkParameters.BookParameters.ValidPriceRange)
            {
                throw new PriceOutOfRangeBadRequestException();
            }

            var booksWithMetaData = await _manager.Book.GetAllBooksAsync(linkParameters.BookParameters, trackChanges);

            var bookDtos = _mapper.Map<IEnumerable<BookDto>>(booksWithMetaData);

            var linkResponse = _bookLinks.TryGenerateLinks(bookDtos, 
                linkParameters.BookParameters.Fields, 
                linkParameters.HttpContext);

            return (linkResponse, booksWithMetaData.MetaData);
        }

        public async Task<List<Book>> GetAllBooksAsync(bool trackChanges)
        {
            var books = await _manager.Book.GetAllBooksAsync(trackChanges);
            return books;
        }

        public async Task<BookDto> GetBookByIdAsync(int id, bool trackChanges)
        {
            var book = await GetBookByIdAndCheckIfItExistsAsync(id, trackChanges);
            return _mapper.Map<BookDto>(book);
        }

        public async Task<IEnumerable<Book>> GetBooksWithDetailsAsync(bool trackChanges)
        {
            return await _manager.Book.GetBooksWithDetailsAsync(trackChanges);
        }

        public async Task<(BookDtoForUpdate bookDtoForUpdate, Book book)> GetOneBookForPatchAsync(int id, bool trackChanges)
        {
            var book = await GetBookByIdAndCheckIfItExistsAsync(id, trackChanges);

            var bookDtoForUpdate = _mapper.Map<BookDtoForUpdate>(book);
            return (bookDtoForUpdate, book);
        }

        public async Task SaveChangesForPatchAsync(BookDtoForUpdate bookDtoForUpdate, Book book)
        {
            _mapper.Map(bookDtoForUpdate, book);

            _manager.Book.UpdateBook(book);
            await _manager.SaveAsync();
        }

        public async Task UpdateBookAsync(int id, BookDtoForUpdate bookDtoForUpdate, bool trackChanges)
        {
            // check entity
            var book = await GetBookByIdAndCheckIfItExistsAsync(id, trackChanges);

            // mapping
            // book.Title = bookDtoForUpdate.Title;
            // book.Price = bookDtoForUpdate.Price;
            book = _mapper.Map<Book>(bookDtoForUpdate);
            
            _manager.Book.UpdateBook(book);
            await _manager.SaveAsync();
        }
    
        private async Task<Book> GetBookByIdAndCheckIfItExistsAsync(int id, bool trackChanges)
        {
            var book = await _manager.Book.GetBookByIdAsync(id, trackChanges);
            if (book == null)
            {
                throw new BookNotFoundException(id);
            }
            return book;
        }
    }
}