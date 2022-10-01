using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Web;

namespace WebApplication1.Models
{
    public class Response
    {
        

        public string Status { set; get; }

        public string Message { set; get; }

        public string Role { get; set; }

    }
}