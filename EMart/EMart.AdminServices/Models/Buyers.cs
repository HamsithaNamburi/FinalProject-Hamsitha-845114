using System;
using System.Collections.Generic;

namespace EMart.AdminServices.Models
{
    public partial class Buyers
    {
        public Buyers()
        {
            Purchase = new HashSet<Purchase>();
        }

        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Emailid { get; set; }
        public int? Mobilenumber { get; set; }
        public DateTime? Createddatetime { get; set; }

        public virtual ICollection<Purchase> Purchase { get; set; }
    }
}
