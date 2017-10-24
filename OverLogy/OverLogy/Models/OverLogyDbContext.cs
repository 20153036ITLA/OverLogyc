using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace OverLogy.Models
{
    public class OverLogyDbContext : DbContext
    {

        public OverLogyDbContext() : base("name=MyConnection")
        {

        }
       public DbSet<OlUsers> Users { get; set; }
    }
}