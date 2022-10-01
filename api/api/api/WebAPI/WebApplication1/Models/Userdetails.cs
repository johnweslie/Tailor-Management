using FluentValidation.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    [Validator(typeof(UserValidator))]
    public class Userdetails
    {
        public int UserId { get; set; }
        public string User_name { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }

        public string Gender { get; set; } 
        public string phone_no { get; set; }
        public string User_DOB { get; set; }
        public string User_Address { get; set; }
        public string User_Staus { get; set; }


    }
}