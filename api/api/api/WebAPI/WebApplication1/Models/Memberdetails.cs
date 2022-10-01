using FluentValidation.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    [Validator(typeof(MemberValidator))]
    public class Memberdetails
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