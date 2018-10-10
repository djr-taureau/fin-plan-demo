using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Lifeworks.AADB2C.UI.Models;

namespace Lifeworks.AADB2C.UI.Controllers
{
    public class IEFController : Controller
    {
        public IActionResult Index(string firm, string iefView)
        {
            // Set the Page Title
            SetPageTitle(iefView.ToLower());

            // Setup White Labled Logo
            SetWhiteLabeledLogo(firm);

            return View("IEF");
        }

        private void SetWhiteLabeledLogo(string firmGuid)
        {
            if (firmGuid == null)
            {
                ViewData["whiteLabelLogo"] = "images/lifeworks_logo.svg";
                return;
            }

            // todo: Azure Function to get White Labeling
            ViewData["whiteLabelLogo"] = "images/white-labeled_logo.svg";
        }

        private void SetPageTitle(string view) {
            ViewData["Title"] = GetTitle(view);
        }
        
        private string GetTitle(string view)
        {
            // todo: Possibly get page title from white label service
            switch (view)
            {
                case "unified":
                    return "Sign up or sign in - Lifeworks";
                case "selfasserted":
                    return "User Details - Lifeworks";
                case "index":
                default:
                    return "Lifeworks";
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
