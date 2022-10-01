using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Register
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
    public class Register_customer
    {
        public int CustomerId { get; set; }
        public string Customer_name { get; set; }
        public string Age { get; set; }
        public string Gender { get; set; }
        public string Phone_no { get; set; }

        public string Material { get; set; }
        public string Measurement { get; set; }

        public string Booking_date { get; set; }
        public string Delivery_date { get; set; }
        public string Customer_address { get; set; }
        public string Customer_status { get; set; }
    }
}