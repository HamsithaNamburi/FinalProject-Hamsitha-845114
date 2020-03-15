using EMart.AdminServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.AdminServices.Repository
{
   public interface IAdminRepository
    {
        void AddCategory(Category obj);
        void AddSubCategory(SubCategory obj);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories();
        public void deletecategory(int id);

        public void deletesubcategory(int id);
        void UpdateCategory(Category obj);
        void updateSubcategory(SubCategory obj);
        SubCategory viewsubcategory(int id);
        Category viewCategory(int id);
    }
}
