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
    public class UserdetailsController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select UserId,User_name,Password,Role,Gender,phone_no,
                    convert(varchar(10),User_DOB,120) as User_DOB,
                    User_Address,User_Staus
                    from
                    dbo.Userdetails
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
        public string Post(Userdetails user)
        {
            try
            {
                string query = @"
                    insert into dbo.Userdetails values
                    (
                    '" + user.User_name + @"'
                    ,'" + user.Password + @"'
                    ,'" + user.Role + @"',
                    '" + user.Gender + @"',
                    '" + user.phone_no + @"'
                    ,'" + user.User_DOB + @"',
                    '" + user.User_Address + @"',
                    'Active'
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

                return "Failed to Add";
            }
        }
        public string Put(Userdetails user)
        {
            try
            {
                string query = @"
                    update dbo.Userdetails set 
                    User_name='" + user.User_name + @"',
                    Password ='" + user.Password + @"',
                    Role='" + user.Role + @"',
                    Gender='" + user.Gender + @"',
                    phone_no='" + user.phone_no + @"',
                    User_DOB='" + user.User_DOB + @"',
                    User_Address='" + user.User_Address + @"',
                    User_Staus='" + user.User_Staus + @"'
                    where UserId='" + user.UserId + @"'
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
                    delete from dbo.Userdetails 
                    where UserId=" + id + @"
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
        [System.Web.Http.Route("api/Userdetails/GetAllUserNames")]
        [System.Web.Http.HttpGet]

        public HttpResponseMessage GetAllUserNames()
        {
            string query = @"
                    select User_name from dbo.Userdetails ";

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