using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebappBanGiayDep.Controllers
{
    public class AuthController : Controller
    {
        // GET: Auth
        public ActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Register(string data)
        {
            return View();
        }
    }
}