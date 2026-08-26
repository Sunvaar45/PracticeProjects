using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.Models;

namespace Repositories.Contracts
{
    public interface ICategoryRepository : IRepositoryBase<Category>
    {
        Task<IEnumerable<Category>> GetAllCategoriesAsync(bool trackChanges);

        Task<Category> GetCategoryByIdAsync(int categoryId, bool trackChanges);

        void CreateCategory(Category category);

        void UpdateCategory(Category category);

        void DeleteCategory(Category category);
    }
}