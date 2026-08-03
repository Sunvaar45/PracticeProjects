using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.Models;
using Repositories.Contracts;

namespace Repositories.EFCore
{
    public class BookRepository : RepositoryBase<Book>, IBookRepository
    {
        public BookRepository(RepositoryContext context) : base(context)
        {
        }
    }
}