using OverLogy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OverLogy.Controllers.Api
{
    public class OLApiController : ApiController
    {
        public IEnumerable<OlUsers> Get()
        {
            OverLogyDbContext db = new OverLogyDbContext();
            var lista = db.Users.ToList();
            return lista;
        }
    }
}
