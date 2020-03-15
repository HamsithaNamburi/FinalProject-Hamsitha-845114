using EMart.AdminServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.AdminServices.Repository
{
    public class AdminRepository : IAdminRepository
    {
        private readonly EMartDBContext _context;
        public AdminRepository(EMartDBContext context)
        {
            _context = context;
        }
        public void AddCategory(Category obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
           
        }

        public void AddSubCategory(SubCategory obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public void deletecategory(int id)
        {
            Category c = _context.Category.SingleOrDefault(e=>e.CategoryId==id);
            _context.Remove(c);
            _context.SaveChanges();
        }

        public void deletesubcategory(int id)
        {
            SubCategory sb = _context.SubCategory.SingleOrDefault(e=>e.SubcategoryId==id);
            _context.Remove(sb);
            _context.SaveChanges();
        }

        public List<Category> GetCategories()
        {
          return  _context.Category.ToList();
        }

        public List<SubCategory> GetSubCategories()
        {
            return _context.SubCategory.ToList();
        }

        public void UpdateCategory(Category obj)
        {
            _context.Category.Update(obj);
            _context.SaveChanges();
        }

        public void updateSubcategory(SubCategory obj)
        {
            _context.SubCategory.Update(obj);
            _context.SaveChanges();
        }

        public SubCategory viewsubcategory(int id)
        {
            return _context.SubCategory.SingleOrDefault(e=>e.SubcategoryId==id);
        }
       

        public Category viewCategory(int id)
        {
            return _context.Category.SingleOrDefault(e => e.CategoryId == id);
        }
    }
}
