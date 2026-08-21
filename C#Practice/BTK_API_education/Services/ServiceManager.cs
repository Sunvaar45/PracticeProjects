using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Entities.DTOs;
using Entities.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Repositories.Contracts;
using Services.Contracts;

namespace Services
{
    public class ServiceManager : IServiceManager
    {
        private readonly Lazy<IBookService> _bookService;
        private readonly Lazy<IAuthenticationService> _authenticationService;

        public ServiceManager(IRepositoryManager repositoryManager, 
            ILoggerService logger, 
            UserManager<User> userManager,
            IConfiguration configuration,
            IMapper mapper,
            IBookLinks bookLinks)
        {
            _bookService = new Lazy<IBookService>(() => 
            new BookService(repositoryManager, logger, mapper, bookLinks));
            
            _authenticationService = new Lazy<IAuthenticationService>(() => 
            new AuthenticationService(logger, mapper, userManager, configuration)); 
        }

        public IBookService BookService => _bookService.Value;

        public IAuthenticationService AuthenticationService => _authenticationService.Value;
    }
}