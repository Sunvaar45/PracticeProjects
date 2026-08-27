using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Entities.DTOs
{
    public record BookDto
    {
        public int Id { get; init; }
        public string Title { get; init; } = string.Empty;
        public decimal Price { get; init; }

        public int CategoryId { get; set; }
    }
}