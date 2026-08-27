using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class Book
    {
        public int Id { get; set; }

        public string Title { get; set; } = string.Empty;

        public decimal Price { get; set; }

        // Ref : Foreign key property
        public int CategoryId { get; set; }

        // Ref : Navigation property
        public Category? Category { get; set; }
    }
}