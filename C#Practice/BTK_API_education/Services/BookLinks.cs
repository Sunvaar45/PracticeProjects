using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.DTOs;
using Entities.LinkModels;
using Entities.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Net.Http.Headers;
using Services.Contracts;

namespace Services
{
    public class BookLinks : IBookLinks
    {
        private readonly LinkGenerator _linkGenerator;
        private readonly IDataShaper<BookDto> _dataShaper;

        public BookLinks(LinkGenerator linkGenerator, IDataShaper<BookDto> dataShaper)
        {
            _linkGenerator = linkGenerator;
            _dataShaper = dataShaper;
        }

        public LinkResponse TryGenerateLinks(IEnumerable<BookDto> bookDtos,
            string fields, HttpContext httpContext)
        {
            var shapedBooks = ShapeData(bookDtos, fields);
            
            if (ShouldGenerateLinks(httpContext))
                return ReturnLinkedBooks(bookDtos, fields, httpContext, shapedBooks);

            // If links should not be generated, return the shaped data without links
            return ReturnShapedBooksWithoutLinks(shapedBooks);
        }

        private LinkResponse ReturnLinkedBooks(IEnumerable<BookDto> bookDtos, 
            string fields,
            HttpContext httpContext,
            List<Entity> shapedBooks)
        {
            var bookDtoList = bookDtos.ToList();

            for (int index = 0; index < bookDtoList.Count; index++)
            {
                var bookLinks = CreateLinksForBook(httpContext, bookDtoList[index], fields);
                shapedBooks[index].Add("Links", bookLinks);
            }

            var bookCollection = new LinkCollectionWrapper<Entity>(shapedBooks);
            return new LinkResponse()
            {
                HasLinks = true,
                LinkedEntities = bookCollection
            };
        }

        private List<Link> CreateLinksForBook(HttpContext httpContext, BookDto bookDto, string fields)
        {
            var links = new List<Link>()
            {
                new Link("a1", "b1", "c1"),
                new Link("a2", "b2", "c2")
            };
            return links;
        }

        private LinkResponse ReturnShapedBooksWithoutLinks(List<Entity> shapedBooks)
        {
            return new LinkResponse()
            {
                HasLinks = false,
                ShapedEntities = shapedBooks
            };
        }

        private bool ShouldGenerateLinks(HttpContext httpContext)
        {
            var mediaType = (MediaTypeHeaderValue)httpContext.Items["AcceptHeaderMediaType"];
            return mediaType
                .SubTypeWithoutSuffix
                .EndsWith("hateoas", StringComparison.InvariantCultureIgnoreCase);
        }

        private List<Entity> ShapeData(IEnumerable<BookDto> bookDtos, string fields)
        {
            return _dataShaper.ShapeData(bookDtos, fields)
                .Select(b => b.Entity)
                .ToList();
        }
    }
}