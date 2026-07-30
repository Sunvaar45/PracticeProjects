using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using btk_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace btk_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(ILogger<ProductsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult GetAllProducts()
        {
            var products = new List<Product>
            {
                new Product { Id = 1, Name = "Product 1" },
                new Product { Id = 2, Name = "Product 2" },
                new Product { Id = 3, Name = "Product 3" }
            };
            _logger.LogInformation("Retrieved all products.");

            return Ok(products);
        }
    }
}