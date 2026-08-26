using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.Models;
using Services.Contracts;

namespace Services
{
    public class CategoryService : ICategoryService
    {
        public Task<Category> CreateCategoryAsync(Category category)
        {
            throw new NotImplementedException();
        }

        public Task DeleteCategoryAsync(int categoryId, bool trackChanges)
        {
            throw new NotImplementedException();
        }

        public Task<List<Category>> GetAllCategoriesAsync(bool trackChanges)
        {
            throw new NotImplementedException();
        }

        public Task<Category> GetCategoryByIdAsync(int categoryId, bool trackChanges)
        {
            throw new NotImplementedException();
        }

        public Task UpdateCategoryAsync(int categoryId, Category category, bool trackChanges)
        {
            throw new NotImplementedException();
        }
    }
}