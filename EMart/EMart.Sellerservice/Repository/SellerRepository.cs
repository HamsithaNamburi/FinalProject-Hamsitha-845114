using EMart.Sellerservice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.Sellerservice.Repository
{
    public class SellerRepository:ISellerRepository
    {
        private readonly EMartDBContext _context;
        public SellerRepository(EMartDBContext context)
        {
            _context = context;
        }

        public void EditProfile(Seller obj)
        {
            _context.Update(obj);
            _context.SaveChanges();
        }

       

        public Seller GetProfile(int sellerid)
        {
            return _context.Seller.Find(sellerid);

        }
    }
}
