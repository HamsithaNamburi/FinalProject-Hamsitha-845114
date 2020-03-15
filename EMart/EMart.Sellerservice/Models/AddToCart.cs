using System;
using System.Collections.Generic;

namespace EMart.Sellerservice.Models
{
    public partial class AddToCart
    {
        public string Id { get; set; }
        public int? CategoryId { get; set; }
        public int? SubcategoryId { get; set; }
        public int? SellerId { get; set; }
        public int Price { get; set; }
        public string ItemName { get; set; }
        public string ItemDescription { get; set; }
        public int? StockNumber { get; set; }
        public string Remarks { get; set; }
        public int? BuyerId { get; set; }
        public int? Itemid { get; set; }

        public virtual Buyers Buyer { get; set; }
        public virtual Category Category { get; set; }
        public virtual Items Item { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual SubCategory Subcategory { get; set; }
    }
}
