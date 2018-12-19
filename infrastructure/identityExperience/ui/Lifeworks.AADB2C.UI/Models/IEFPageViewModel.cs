using System;

namespace Lifeworks.AADB2C.UI.Models
{
    public class IEFPageViewModel
    {
        public string PageTitle { get; set; }
        public string BackgroundImageUrl { get; set; }
        public string BrandingImageUrl { get; set; }
        public string PoweredByImageUrl { get; set; }
        public string HostUrl { get;set; }
        public bool IsDebugView { get;set; }
        public bool IsCodeView { get;set; }
        public string LayoutName {get; set;}
    }
}