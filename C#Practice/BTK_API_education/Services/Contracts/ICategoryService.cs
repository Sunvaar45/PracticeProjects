using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using Entities.DTOs;
using Entities.LinkModels;
using Entities.Models;
using Entities.RequestFeatures;

namespace Services.Contracts
{
    public interface ICategoryService
    {
        Task<List<Category>> GetAllCategoriesAsync(bool trackChanges);

        Task<Category> GetCategoryByIdAsync(int categoryId, bool trackChanges);

        Task<Category> CreateCategoryAsync(Category category);

        Task UpdateCategoryAsync(int categoryId, Category category, bool trackChanges);

        Task DeleteCategoryAsync(int categoryId, bool trackChanges);
    }
}