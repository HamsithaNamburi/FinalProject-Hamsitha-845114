using System;
using System.Collections.Generic;

namespace EMart.Buyerservices.Models
{
    public partial class Buyers
    {
        public Buyers()
        {
            AddToCart = new HashSet<AddToCart>();
            Purchase = new HashSet<Purchase>();
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Emailid { get; set; }
        public int? Mobilenumber { get; set; }
        public DateTime? Createddatetime { get; set; }

        public virtual ICollection<AddToCart> AddToCart { get; set; }
        public virtual ICollection<Purchase> Purchase { get; set; }
    }
}
