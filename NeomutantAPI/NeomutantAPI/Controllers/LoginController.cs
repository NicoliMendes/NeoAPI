using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NeomutantAPI.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();

        }
        [HttpPost("Login")] 
   
        public ActionResult Login()
        {
            return Ok();
        }
    }
}
