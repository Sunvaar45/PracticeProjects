using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Presentation.ActionFilters;
using Services.Contracts;

namespace Presentation.Controllers
{
    [ApiController]
    [Route("api/categories")]
    public class CategoriesController : ControllerBase
    {
        private readonly IServiceManager _serviceManager;

        public CategoriesController(IServiceManager serviceManager)
        {
            _serviceManager = serviceManager;
        }

        [HttpGet(Name = "GetCategoriesAsync")]
        [ServiceFilter(typeof(ValidateMediaTypeAttribute))]
        public async Task<IActionResult> GetCategoriesAsync()
        {
            var categories = await _serviceManager.CategoryService.GetAllCategoriesAsync(trackChanges: false);
            
            return Ok(categories);
        }

        [HttpGet("{id}", Name = "GetCategoryByIdAsync")]
        [ServiceFilter(typeof(ValidateMediaTypeAttribute))]
        public async Task<IActionResult> GetCategoryByIdAsync([FromRoute] int id)
        {
            var category = await _serviceManager.CategoryService.GetCategoryByIdAsync(id, trackChanges: false);

            return Ok(category);
        }
    }
}