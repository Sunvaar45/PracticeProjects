using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Entities.Models;
using System.Linq.Dynamic.Core;

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

            // title, price desc, word asc
            var orderParams = orderByQueryString.Trim().Split(',');

            // Get the public properties of the Book class
            var propertyInfos = typeof(Book)
                .GetProperties(BindingFlags.Public | BindingFlags.Instance);

            var orderQueryBuilder = new StringBuilder();
            foreach (var param in orderParams) // title, price desc, word asc
            {
                if (string.IsNullOrWhiteSpace(param))
                    continue;

                var propertyFromQueryName = param.Trim().Split(" ")[0]; // title, price, word

                // title, price, null
                var objectProperty = propertyInfos
                    .FirstOrDefault(pi => pi.Name.Equals(propertyFromQueryName, StringComparison.InvariantCultureIgnoreCase));
            
                if (objectProperty == null)
                    continue;

                var direction = param.EndsWith(" desc") ? "descending" : "ascending";

                orderQueryBuilder.Append($"{objectProperty.Name.ToString()} {direction}, ");
            } // title ascending, price descending, 

            var orderQuery = orderQueryBuilder.ToString().TrimEnd(',', ' '); // title ascending, price descending

            if (string.IsNullOrWhiteSpace(orderQuery))
                return books.OrderBy(b => b.Title);

            return books.OrderBy(orderQuery);
        }
    }
}