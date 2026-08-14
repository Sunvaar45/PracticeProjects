using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.DTOs;
using Entities.LinkModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
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
            throw new NotImplementedException();
        }
    }
}