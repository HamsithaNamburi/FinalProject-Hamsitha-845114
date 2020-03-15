using EMart.Sellerservice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.Sellerservice.Repository
{
   public  interface ISellerRepository
    {
       
       void  EditProfile(Seller obj);
        Seller GetProfile(int id);
    
        //List<Items> Viewitem(int sid);
        //void DeleteItems(int itemid);
        //void UpdateItems(Items obj);
        //void GetItem(int itemid);

    }
}
