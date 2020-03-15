using EMart.Buyerservices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.Buyerservices.Repository
{
    public class BuyerRepository : IBuyerRepository
    {
        private readonly EMartDBContext _context;
        public BuyerRepository(EMartDBContext context)
        {
            _context = context;
        }

        public AddToCart Addcarts(int id)
        {
            throw new NotImplementedException();
        }

        public AddToCart Addcartsbyid(int id)
        {
            throw new NotImplementedException();
        }

        public void AddPurchaseHistrory(Purchase obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public void AddtoCart(AddToCart obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public void BuyItem(Purchase obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public void Delete(string id)
        {
            AddToCart a = _context.AddToCart.Find(id);
            _context.Remove(a);
            _context.SaveChanges();
        }

        

        public void EditProfile(Buyers obj)
        {
            _context.Buyers.Update(obj);
            _context.SaveChanges();
        }

        public int getall(int id)
        {
            var a = _context.AddToCart.Where(e => e.Itemid == id).ToList();
            if (a.Count != 0)
            {
                return 1;
            }
            else
                return 0;
        }

        public List<Category> GetCategories(string name)
        {
            return _context.Category.Where(e => e.CategoryName == name).ToList();
        }

        public List<Items> GetItems()
        {
           return _context.Items.ToList();
        }

        //public List<Items> GetItems(string name)
        //{
        //    throw new NotImplementedException();
        //}

        //public List<Items> GetItems(string name)
        //{
        //   return _context.Items.Where(e=>e.CategoryId==name)
        //}

        public Buyers GETProfile(int bid)
        {
            return _context.Buyers.Find(bid);
        }

        //public List<SubCategory> GetSubCategoriename(string name)
        //{
        //    return _context.SubCategory.SingleOrDefault(e=>e.CategoryId==cid)
        //}

        public List<SubCategory> GetSubCategories(int cid)
        {
            return _context.SubCategory.Where(e=>e.CategoryId==cid).ToList();
        }

        public List<Purchase> PurchaseHistory(int bid)
        {
            return _context.Purchase.Where(e=>e.BuyerId==bid).ToList();
        }

        public List<Items> SearchItems(string name)
        {
            return _context.Items.Where(e => e.ItemName == name).ToList();
        }

        public List<AddToCart> viewcart(int id)
        {
            return _context.AddToCart.Where(e => e.BuyerId == id).ToList();
        }

        
    }
}
