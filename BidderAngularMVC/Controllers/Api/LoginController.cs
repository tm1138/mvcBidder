using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Routing;
using BidderAngularMVC.Models;

namespace BidderAngularMVC.Controllers.Api
{
    [RoutePrefix("api")]
    public class LoginController : ApiController
    {
        [HttpPost]
        [Route("login")]
        public object Login([FromBody] LoginData loginData)
        {
            System.Web.HttpContext context = System.Web.HttpContext.Current;
            Type type = context.User.Identity.GetType();
            return this.Ok();
        }
    }
}
