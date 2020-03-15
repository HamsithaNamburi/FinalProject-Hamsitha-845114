using System;
using System.Collections.Generic;

namespace EMart.Sellerservice.Models
{
    public partial class Discounts
    {
        public int DId { get; set; }
        public string DiscountCode { get; set; }
        public int? Percentage { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string DDescription { get; set; }
    }
}
