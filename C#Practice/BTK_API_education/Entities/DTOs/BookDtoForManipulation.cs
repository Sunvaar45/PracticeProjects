using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Entities.DTOs
{
    public abstract record BookDtoForManipulation
    {
        [Required(ErrorMessage = "Title is required.")]
        [MinLength(2, ErrorMessage = "Title must be at least 2 characters.")]
        [MaxLength(50, ErrorMessage = "Title must be at most 50 characters.")]
        public string Title { get; init; } = string.Empty;

        [Required(ErrorMessage = "Title is required.")]
        [Range(10, 1000)]
        public decimal Price { get; init; }
    }
}