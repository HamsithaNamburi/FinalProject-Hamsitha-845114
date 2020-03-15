﻿using System;
using System.Collections.Generic;

namespace EMart.UserServices.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Items = new HashSet<Items>();
        }

        public int SubcategoryId { get; set; }
        public string SubcategoryName { get; set; }
        public int? CategoryId { get; set; }
        public string BriefDetails { get; set; }
        public decimal? Gstper { get; set; }

        public virtual Category Category { get; set; }
        public virtual ICollection<Items> Items { get; set; }
    }
}
