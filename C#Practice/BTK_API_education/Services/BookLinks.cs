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
            CreateLinksForBooks(httpContext, bookCollection);
            return new LinkResponse()
            {
                HasLinks = true,
                LinkedEntities = bookCollection
            };
        }

        private LinkCollectionWrapper<Entity> CreateLinksForBooks(HttpContext httpContext, LinkCollectionWrapper<Entity> booksWrapper)
        {
            booksWrapper.Links.AddRange(new List<Link>()
            {
                new Link()
                {
                    Href = $"/api/{httpContext.GetRouteData().Values["controller"].ToString().ToLower()}",
                    Rel = "self",
                    Method = "GET"
                }
            });

            return booksWrapper;
        }

        private List<Link> CreateLinksForBook(HttpContext httpContext, BookDto bookDto, string fields)
        {
            var links = new List<Link>()
            { // TODO: Use LinkGenerator to generate links instead of hardcoding them
                new Link()
                { // Self link for the specific book
                    Href = $"/api/{httpContext.GetRouteData().Values["controller"].ToString().ToLower()}" +
                        $"/{bookDto.Id}",
                    Rel = "self",
                    Method = "GET"
                },
                new Link()
                { // Link to create a new book
                    Href = $"/api/{httpContext.GetRouteData().Values["controller"].ToString().ToLower()}",
                    Rel = "create",
                    Method = "POST"
                }
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