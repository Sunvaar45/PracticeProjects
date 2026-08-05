using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Repositories.Contracts;
using Services.Contracts;

namespace Services
{
    public class ServiceManager : IServiceManager
    {
        private readonly Lazy<IBookService> _bookService;
        public ServiceManager(IRepositoryManager repositoryManager, ILoggerService logger)
        {
            _bookService = new Lazy<IBookService>(() => new BookService(repositoryManager, logger));
        }

        public IBookService BookService => _bookService.Value;
    }
}