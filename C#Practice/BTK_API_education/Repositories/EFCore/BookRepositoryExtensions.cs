using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.Models;

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
    }
}