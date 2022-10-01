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
    [System.Web.Http.RoutePrefix("Api/login")]
    public class LoginController : ApiController
    {
        // GET: Login

        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["TailorDB"].ToString());
        SqlCommand cmd = new SqlCommand();
        SqlDataAdapter adp = null;

        


        [System.Web.Http.Route("Login")]

        [System.Web.Http.HttpPost]
        public Response Login(Userlogin log)

        {

            SqlCommand cmd = new SqlCommand("select * from Userdetails where User_name = '" + log.User_name + "'and Password = '" + log.Password + "' and Role = 'Admin'", con);

            SqlDataAdapter sda = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            sda.Fill(dt);
            con.Open();
            int i = cmd.ExecuteNonQuery();
            con.Close();
            if (dt.Rows.Count > 0)
            {
                
                return new Response { Status = "Success", Role = "Admin", Message = "Login SuccessFully."};
                
            }
            else
            {
                return new Response { Status = "Failed", Message = "Please Enter Valid Username & Password." };
            }
            


        }

        [System.Web.Http.Route("AdminLogin")]

        [System.Web.Http.HttpPost]
        public Response AdminLogin(Userlogin log)

        {

            SqlCommand cmd = new SqlCommand("select * from Userdetails where User_name = '" + log.User_name + "' and Password = '" + log.Password + "' and Role = 'Employee'", con);

            SqlDataAdapter sda = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            sda.Fill(dt);
            con.Open();
            int i = cmd.ExecuteNonQuery();
            con.Close();
            if (dt.Rows.Count > 0)
            {

                return new Response { Status = "Success",Role = "Employee", Message = "Login SuccessFully." };

            }
            else
            {
                return new Response { Status = "Failed", Message = "Please Enter Valid Username & Password." };
            }



        }



        [System.Web.Http.Route("InsertCustomer")]
        [System.Web.Http.HttpPost]
        public object InsertCustomer(Register_customer regc)

        {
            try
            {
                string query = @"
                    insert into dbo.Customerdetail values
                    (
                    '" + regc.Customer_name + @"',
                    '" + regc.Age + @"',
                    '" + regc.Gender + @"',
                    '" + regc.Phone_no + @"',
                    '" + regc.Material+@"',
                    '" + regc.Measurement+@"',
                    '" + regc.Booking_date + @"',
                    '"+null+@"',
                    '" + regc.Customer_address + @"',
                    'Processing'
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

                return new Response { Status = "Success", Message = "Record SuccessFully Saved." };

            }
            catch (Exception)
            {

                return new Response { Status = "Error", Message = "Invalid Data." };
            }
        }


    }
}