using System;
using System.Collections.Generic;

namespace EMart.AdminServices.Models
{
    public partial class Items
    {
        public Items()
        {
            Purchase = new HashSet<Purchase>();
        }

        public int Id { get; set; }
        public int? CategoryId { get; set; }
        public int? SubcategoryId { get; set; }
        public int Price { get; set; }
        public string ItemName { get; set; }
        public string ItemDescription { get; set; }
        public int? StockNumber { get; set; }
        public string Remarks { get; set; }
        public int? SellerId { get; set; }

        public virtual Category Category { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual SubCategory Subcategory { get; set; }
        public virtual ICollection<Purchase> Purchase { get; set; }
    }
}
