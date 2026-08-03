using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Repositories.EFCore.Config
{
    public class BookConfig : IEntityTypeConfiguration<Book>
    {
        public void Configure(EntityTypeBuilder<Book> builder)
        {
            builder.HasData(
                new Book { Id = 1, Title = "The Great Gatsby", Price = 75 },
                new Book { Id = 2, Title = "To Kill a Mockingbird", Price = 175 },
                new Book { Id = 3, Title = "1984", Price = 375 }
            );
        }
    }
}