using EMart.UserServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.UserServices.Repositories
{
   public  interface IUserRepository
    {
        //List<Buyers> GetAllBuyers();

        Buyers BuyerLogin(string Username, string Password);
        Seller SellerLogin(string Username, string Password);
        public void BuyerRegister(Buyers obj);
        public void SellerRegister(Seller obj);
       

      
    }
}
