using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
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
   
        public ActionResult Login(string user, string password)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                   .SetBasePath(Directory.GetCurrentDirectory())
                   .AddJsonFile("appsettings.json")
                   .Build();
            using var con = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
            con.Open();
            string query = $" SELECT COUNT(1) RECORDS FROM Users " +
                    $" WHERE UserName = '{user}' AND Password = HashBytes('MD5', '{password}')";
            SqlCommand Consult;
            Consult = new SqlCommand(query, con);
            SqlDataReader reader = Consult.ExecuteReader();
            int NumRecords = 0;

            while (reader.Read())
                NumRecords = reader.GetInt32(0);

            if (NumRecords > 0)
            {
                return Ok();
            }
            else
            {
                return Unauthorized();
            }

        }
    }
}
