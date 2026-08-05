using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Entities.Exceptions
{
    public sealed class BookNotFound : NotFound
    {
        public BookNotFound(int id) : base($"Book with ID {id} not found.")
        {

        }
    }
}