using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.UserServices
{
    public class Token
    {
        public int sellerid { get; set; }
        public int buyerid { get; set; }
        public string token { get; set; }
        public string message { get; set;}

    }
}
