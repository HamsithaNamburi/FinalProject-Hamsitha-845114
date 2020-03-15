using EMart.Sellerservice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.Sellerservice.Repository
{
    public class ItemRepository:IItemRepository
    {
        private readonly EMartDBContext _context;
             
        public ItemRepository(EMartDBContext context)
        {
            _context = context;
        }
        public void AddItems(Items obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public void DeleteItem(int itemid)
        {
            Items i = _context.Items.Find(itemid);
            _context.Remove(i);
            _context.SaveChanges();
        }

        public Items GetItem(int itemid)
        {
            return _context.Items.Find(itemid);
        }

        public Items GetItembyId(int id)
        {
           return _context.Items.SingleOrDefault(e => e.Id == id);
        }

        public List<Items> GetItems(string name)
        {
            return _context.Items.Where(e =>e.ItemName==name).ToList();
        }

        public List<SubCategory> GetSubCategory(int id)
        {
            List<SubCategory> subCategories = _context.SubCategory.Where(e =>e.CategoryId==id).ToList();
            return subCategories;
        }

        public void UpdateItem(Items obj)
        {
            _context.Items.Update(obj);
            _context.SaveChanges();
        }

        public List<Items> ViewItems(int id)
        {
           return _context.Items.Where(e => e.SellerId == id).ToList();
            
        }
    }
}
