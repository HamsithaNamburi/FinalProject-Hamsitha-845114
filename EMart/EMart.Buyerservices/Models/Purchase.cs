using System;
using System.Collections.Generic;

namespace EMart.Buyerservices.Models
{
    public partial class Purchase
    {
        public string Id { get; set; }
        public int? BuyerId { get; set; }
        public int? SellerId { get; set; }
        public string TName { get; set; }
        public int? ItemId { get; set; }
        public int NumberOfItems { get; set; }
        public DateTime? DateTime { get; set; }
        public string Remarks { get; set; }
        public string TStatus { get; set; }

        public virtual Buyers Buyer { get; set; }
        public virtual Items Item { get; set; }
        public virtual Seller Seller { get; set; }
    }
}
