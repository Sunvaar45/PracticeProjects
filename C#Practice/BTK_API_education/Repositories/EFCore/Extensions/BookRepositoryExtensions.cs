using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Entities.Models;
using System.Linq.Dynamic.Core;
using Repositories.EFCore.Extensions;

namespace Repositories.EFCore
{
    public static class BookRepositoryExtensions
    {
        public static IQueryable<Book> FilterBooksByPrice(this IQueryable<Book> books,
            uint minPrice, uint maxPrice)
        {
            return books.Where(b => 
                b.Price >= minPrice &&
                b.Price <= maxPrice
            );
        }

        public static IQueryable<Book> Search(this IQueryable<Book> books,
            string searchTerm)
        {
            if (string.IsNullOrWhiteSpace(searchTerm))
                return books;

            var lowerCaseSearchTerm = searchTerm.Trim().ToLower();

            return books.Where(b => b.Title
                .ToLower()
                .Contains(lowerCaseSearchTerm)
            );
        }
    
        public static IQueryable<Book> Sort(this IQueryable<Book> books,
            string orderByQueryString)
        {
            if (string.IsNullOrWhiteSpace(orderByQueryString))
                return books.OrderBy(b => b.Title);

            var orderQuery = OrderQueryBuilder
                .CreateOrderQuery<Book>(orderByQueryString);

            if (string.IsNullOrWhiteSpace(orderQuery))
                return books.OrderBy(b => b.Title);

            return books.OrderBy(orderQuery);
        }
    }
}