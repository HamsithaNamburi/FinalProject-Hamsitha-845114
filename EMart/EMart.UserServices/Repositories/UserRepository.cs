using EMart.UserServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.UserServices.Repositories
{
    public class UserRepository : IUserRepository
       
    {
        private readonly EMartDBContext _context;
        public UserRepository(EMartDBContext context)
        {
            _context = context;
        }

        public Buyers BuyerLogin(string Username, string Password)
        {
            //_context.Buyers.Where(e=>e.Username==Username && e=>e.)
            //return  _context.Buyers.Where(e => e.Username == Username && e.Password == Password).ToList();
            //        //if (x.Count == 0)
            //{
            //    return 0;
            //}
            //else
            //    return 1;
            Buyers x= _context.Buyers.SingleOrDefault(e => e.Username == Username && e.Password == Password);
            return x;
        }

       

        public void BuyerRegister(Buyers obj)
        {
            _context.Add(obj);
            _context.SaveChanges();

            
        }

        public Seller SellerLogin(string Username, string Password)
        {
            Seller x = _context.Seller.SingleOrDefault(e => e.Username == Username && e.Password == Password);
            //if (x.Count == 0)
            //{
            //    return 0;
            //}
            //return 1;
            return x;
        }

        public void SellerRegister(Seller obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }
    }
}
