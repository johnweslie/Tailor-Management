﻿//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApplication1.Controllers
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Objects;
    using System.Data.Objects.DataClasses;
    using System.Linq;
    
    public partial class TailorDBEntities : DbContext
    {
        public TailorDBEntities()
            : base("name=TailorDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public DbSet<Customerdetail> Customerdetails { get; set; }
        public DbSet<Userdetail> Userdetails { get; set; }
    
        public virtual ObjectResult<sp_users_Result> sp_users(string user_name, string password, string stmttype)
        {
            var user_nameParameter = user_name != null ?
                new ObjectParameter("User_name", user_name) :
                new ObjectParameter("User_name", typeof(string));
    
            var passwordParameter = password != null ?
                new ObjectParameter("Password", password) :
                new ObjectParameter("Password", typeof(string));
    
            var stmttypeParameter = stmttype != null ?
                new ObjectParameter("stmttype", stmttype) :
                new ObjectParameter("stmttype", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<sp_users_Result>("sp_users", user_nameParameter, passwordParameter, stmttypeParameter);
        }
    
        public virtual ObjectResult<Usp_GetAllCustomer_Result> Usp_GetAllCustomer(Nullable<int> pageNo, Nullable<int> pageSize, string sortOrder)
        {
            var pageNoParameter = pageNo.HasValue ?
                new ObjectParameter("PageNo", pageNo) :
                new ObjectParameter("PageNo", typeof(int));
    
            var pageSizeParameter = pageSize.HasValue ?
                new ObjectParameter("PageSize", pageSize) :
                new ObjectParameter("PageSize", typeof(int));
    
            var sortOrderParameter = sortOrder != null ?
                new ObjectParameter("SortOrder", sortOrder) :
                new ObjectParameter("SortOrder", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Usp_GetAllCustomer_Result>("Usp_GetAllCustomer", pageNoParameter, pageSizeParameter, sortOrderParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> Usp_getAllCustomerCount()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("Usp_getAllCustomerCount");
        }
    
        public virtual ObjectResult<Usp_GetAllEmployee_Result> Usp_GetAllEmployee(Nullable<int> pageNo, Nullable<int> pageSize, string sortOrder)
        {
            var pageNoParameter = pageNo.HasValue ?
                new ObjectParameter("PageNo", pageNo) :
                new ObjectParameter("PageNo", typeof(int));
    
            var pageSizeParameter = pageSize.HasValue ?
                new ObjectParameter("PageSize", pageSize) :
                new ObjectParameter("PageSize", typeof(int));
    
            var sortOrderParameter = sortOrder != null ?
                new ObjectParameter("SortOrder", sortOrder) :
                new ObjectParameter("SortOrder", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Usp_GetAllEmployee_Result>("Usp_GetAllEmployee", pageNoParameter, pageSizeParameter, sortOrderParameter);
        }
    
        public virtual ObjectResult<Nullable<int>> Usp_getAllEmployeeCount()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Nullable<int>>("Usp_getAllEmployeeCount");
        }
    }
}
