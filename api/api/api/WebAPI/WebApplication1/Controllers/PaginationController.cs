using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Data.Objects;
using System.Drawing.Printing;



namespace WebApplication1.Controllers
{
    public class PaginationController : ApiController
    {
        // GET: Pagination
        TailorDBEntities db = new TailorDBEntities();  
         [HttpGet]  
        public object getAllCustomer(int pageNo, int pageSize, string sortOrder)
        {  
            var oMyString = new ObjectParameter("totalCount", typeof(int));  
            var Customerdetail = db.Usp_GetAllCustomer(pageNo, pageSize, sortOrder).ToList();  
            return Customerdetail;  

        }  

  

        [HttpGet]  

        public object getAllCustomerCount()

        {  

  

            var companyDetailsCount = db.Usp_getAllCustomerCount().SingleOrDefault();         

            return companyDetailsCount;  

        }  
    }
}