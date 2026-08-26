using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Entities.Models;
using Repositories.Contracts;
using Services.Contracts;

namespace Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IRepositoryManager _manager;

        public CategoryService(IRepositoryManager manager)
        {
            _manager = manager;
        }

        public async Task<Category> CreateCategoryAsync(Category category)
        {
            throw new NotImplementedException();
        }

        public async Task DeleteCategoryAsync(int categoryId, bool trackChanges)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Category>> GetAllCategoriesAsync(bool trackChanges)
        {
            return await _manager.Category.GetAllCategoriesAsync(trackChanges);
        }

        public async Task<Category> GetCategoryByIdAsync(int categoryId, bool trackChanges)
        {
            return await _manager.Category.GetCategoryByIdAsync(categoryId, trackChanges);
        }

        public async Task UpdateCategoryAsync(int categoryId, Category category, bool trackChanges)
        {
            throw new NotImplementedException();
        }
    }
}