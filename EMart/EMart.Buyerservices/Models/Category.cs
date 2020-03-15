using System;
using System.Collections.Generic;

namespace EMart.Buyerservices.Models
{
    public partial class Category
    {
        public Category()
        {
            AddToCart = new HashSet<AddToCart>();
            Items = new HashSet<Items>();
            SubCategory = new HashSet<SubCategory>();
        }

        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string BriefDetails { get; set; }

        public virtual ICollection<AddToCart> AddToCart { get; set; }
        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<SubCategory> SubCategory { get; set; }
    }
}
