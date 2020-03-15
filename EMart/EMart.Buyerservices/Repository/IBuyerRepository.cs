using EMart.Buyerservices.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections;

namespace EMart.Buyerservices.Repository
{
   public  interface IBuyerRepository
    {

        List<Items> SearchItems(string name);
        void BuyItem(Purchase obj);
        void EditProfile(Buyers obj);
        Buyers GETProfile(int bid);
        List<Purchase> PurchaseHistory(int bid);
        List<Category> GetCategories(string name);
        List<SubCategory> GetSubCategories(int cid);

        void AddPurchaseHistrory(Purchase obj);

        void AddtoCart(AddToCart obj);

        List<AddToCart> viewcart(int id);

        void Delete(string id);

        List<Items> GetItems();
        int getall(int id);

      



        //List<SubCategory> GetSubCategoriename(string name);


    }
}
