using EMart.Sellerservice.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.Sellerservice.Repository
{
   public  interface IItemRepository
    {
        public void AddItems(Items obj);
        List<Items> ViewItems(int id);
        void DeleteItem(int itemid);
        void UpdateItem(Items obj);
        Items GetItem(int itemid);
        Items GetItembyId(int id);
        List<SubCategory> GetSubCategory(int id);
       List<Items> GetItems(string name);

    }
}
