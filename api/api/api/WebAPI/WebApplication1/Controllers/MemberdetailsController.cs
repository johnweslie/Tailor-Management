using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace WebApplication1.Controllers
{
    public class MemberdetailsController : ApiController
    {
       
            public HttpResponseMessage Get()
            {
                string query = @"
                    select CustomerId,Customer_name,Age,Gender,Phone_no,Material,Measurement,
                    convert(varchar(10),Booking_date,120) as Booking_date,
                    convert(varchar(10),Delivery_date,120) as Delivery_date,
                    Customer_address,Customer_status
                    from
                    dbo.Customerdetail
                    ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["TailorDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return Request.CreateResponse(HttpStatusCode.OK, table);


            }
            public string Post(Memberdetails member)
            {
                try
                {
                    string query = @"
                    insert into dbo.Customerdetail values
                    (
                    '" +member.Customer_name+ @"',
                    '" + member.Age + @"',
                    '" + member.Gender + @"',
                    '" + member.Phone_no + @"',
                    '" + member.Material + @"',
                    '" + member.Measurement + @"',
                    '" + member.Booking_date + @"',
                    '" + member.Delivery_date + @"',
                    '" + member.Customer_address + @"',
                    '"+member.Customer_status+@"'
                    )
                    ";

                    DataTable table = new DataTable();
                    using (var con = new SqlConnection(ConfigurationManager.
                        ConnectionStrings["TailorDB"].ConnectionString))
                    using (var cmd = new SqlCommand(query, con))
                    using (var da = new SqlDataAdapter(cmd))
                    {
                        cmd.CommandType = CommandType.Text;
                        da.Fill(table);
                    }

                    return "Added Successfully!!";
                }
                catch (Exception)
                {

                    return "Failed to Add!!";
                }
            }
            public string Put(Memberdetails member)
            {
                try
                {
                    string query = @"
                    update dbo.Customerdetail set 
                    Customer_name='" + member.Customer_name + @"',
                    Age ='" + member.Age + @"',
                    Gender ='" + member.Gender + @"',
                    Phone_no ='" + member.Phone_no + @"',
                    Material ='" + member.Material + @"',
                    Measurement ='" + member.Measurement + @"',
                    Booking_date ='" + member.Booking_date + @"',
                    Delivery_date ='" + member.Delivery_date + @"',
                    Customer_address ='" + member.Customer_address + @"',
                    Customer_status ='" + member.Customer_status + @"'


                    where CustomerId=" + member.CustomerId + @"
                    ";

                    DataTable table = new DataTable();
                    using (var con = new SqlConnection(ConfigurationManager.
                        ConnectionStrings["TailorDB"].ConnectionString))
                    using (var cmd = new SqlCommand(query, con))
                    using (var da = new SqlDataAdapter(cmd))
                    {
                        cmd.CommandType = CommandType.Text;
                        da.Fill(table);
                    }

                    return "Updated Successfully!!";
                }
                catch (Exception)
                {

                    return "Failed to Update!!";
                }
            }


            public string Delete(int id)
            {
                try
                {
                    string query = @"
                    delete from dbo.Customerdetail 
                    where CustomerId=" + id + @"
                    ";

                    DataTable table = new DataTable();
                    using (var con = new SqlConnection(ConfigurationManager.
                        ConnectionStrings["TailorDB"].ConnectionString))
                    using (var cmd = new SqlCommand(query, con))
                    using (var da = new SqlDataAdapter(cmd))
                    {
                        cmd.CommandType = CommandType.Text;
                        da.Fill(table);
                    }

                    return "Deleted Successfully!!";
                }
                catch (Exception)
                {

                    return "Failed to Delete!!";
                }
            }
        [System.Web.Http.Route("api/Memberdetails/GetAllMemberNames")]
        [System.Web.Http.HttpGet]

        public HttpResponseMessage GetAllMemberNames()
        {
            string query = @"
                    select Customer_name from dbo.Customerdetail";

            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["TailorDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

    }
    

}