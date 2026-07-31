using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bookDemo.Models;

namespace bookDemo.Data
{
    public static class ApplicationContext
    {
        public static List<Book> Books { get; set; } = new List<Book>
        {
            new Book { Id = 1, Title = "Book 1", Price = 75 },
            new Book { Id = 2, Title = "Book 2", Price = 150 },
            new Book { Id = 3, Title = "Book 3", Price = 100 }
        }; 
    }
}