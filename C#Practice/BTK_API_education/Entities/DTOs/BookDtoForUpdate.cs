using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Entities.DTOs
{
    public record BookDtoForUpdate(int Id, string Title, decimal Price)
    {
        // public int Id { get; init; }
        // public string Title { get; init; } = string.Empty;
        // public decimal Price { get; init; }
    }
}