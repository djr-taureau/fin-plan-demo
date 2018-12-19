using System;
using System.IO;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Microsoft.Extensions.Options;
using Lifeworks.AADB2C.UI.Models;
using Lifeworks.AADB2C.UI.Services;

namespace Lifeworks.AADB2C.UI.Controllers
{
    public class IEFController : Controller
    {
        private readonly AppSettings _appSettings;
        private readonly ICompositeViewEngine _compositeViewEngine;
        private static readonly Dictionary<string, string> CustomLayoutMap = new Dictionary<string, string>
        {
            { "consent", "_Layout_Consent" }
        };
        private static readonly Dictionary<string, bool> CodeViewMap = new Dictionary<string, bool>{
            { "consent", true }
        };
        private string IMAGE_ROOT = string.Empty;

        TOSService _tosService;
        ContentService _contentService;
        SettingsService _settingsService;

        public IEFController(IOptions<AppSettings> appSettings, ICompositeViewEngine compositeViewEngine, TOSService tosService, ContentService contentService, SettingsService settingsService)
        {
            _compositeViewEngine = compositeViewEngine;
            _appSettings = appSettings.Value;
            _tosService = tosService;
            _contentService = contentService;
            _settingsService = settingsService;

            IMAGE_ROOT = $"{_appSettings.HostUrl}/images";
        }


        public async Task<IActionResult> Index(string firm, string iefView)
        {
            string view = iefView.ToLower();
            string requestedFirm = string.IsNullOrEmpty(firm) ? null : firm.ToLower();

            bool useDebugView = IsDebugView();
            string layout = GetLayout(view);
            bool isCodeView = GetIsCodeView(view);
            string responseView = GetView(view, useDebugView, isCodeView);

            IEFPageViewModel pageModel = new IEFPageViewModel()
            {
                HostUrl = _appSettings.HostUrl,
                PageTitle = GetTitle(view),
                BrandingImageUrl = await GetCompanyLogoUrl(requestedFirm),
                BackgroundImageUrl = $"{IMAGE_ROOT}/lw_street.svg",
                PoweredByImageUrl = $"{IMAGE_ROOT}/powered-by-lifeworks.svg",
                IsDebugView = useDebugView,
                LayoutName = layout,
                IsCodeView = isCodeView
            };

            return View(responseView, pageModel);
        }

        public async Task<IActionResult> TosConsent(string firm, string iefView)
        {
            string response = await _tosService.GetContents();
            ViewData.Add("tos", response);
            return await Index(firm, iefView);
        }

        private async Task<string> GetCompanyLogoUrl(string firm)
        {
            string defaultBranding = $"{IMAGE_ROOT}/lifeworks_logo.svg";
            if (firm == null)
            {
                return defaultBranding;
            }
            bool IsWhiteLabeled = await _settingsService.IsWhiteLabled(_appSettings.ApiUrl, firm);
            if (!IsWhiteLabeled) {
                return defaultBranding;
            }

            ContentInfoResult result = await _contentService.GetContentInfo($"content/assets/firm${firm}/{_appSettings.BrandingLogoPath}");

            try {
                return result.url;
            } catch {
                return defaultBranding;
            }
        }

        private string GetTitle(string iefView)
        {
            switch (iefView)
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

        private string GetLayout(string view)
        {
            return CustomLayoutMap.GetValueOrDefault(view, "_Layout");
        }

        private bool GetIsCodeView(string view)
        {
            return CodeViewMap.GetValueOrDefault(view, false);
        }

        private string GetView(string iefView, bool useDebugView, bool isCodeView)
        {
            if (!useDebugView && !isCodeView)
            {
                return "index";
            }

            var viewName = $"~/Views/IEF/{iefView}.cshtml";
            var result = _compositeViewEngine.GetView("", viewName, false);

            return result.Success ? iefView : "index";
        }

        private bool IsDebugView()
        {
            bool isDebugView = false;
#if DEBUG
            isDebugView = true;
#endif

            return isDebugView;
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
