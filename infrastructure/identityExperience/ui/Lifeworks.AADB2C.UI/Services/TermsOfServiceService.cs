using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Collections.Generic;
using Microsoft.Extensions.Options;
using Lifeworks.AADB2C.UI.Models;


namespace Lifeworks.AADB2C.UI.Services
{
    public class TOSService : ContentService
    {
        public TOSService(IOptions<AppSettings> appSettings): 
            base(appSettings) { }

        public string GetTOSContentUrl()
        {
            return $"{settings.TosPath}";
        }
        public async Task<string> GetContents()
        {
            return await GetContents(GetTOSContentUrl());
        }
    }
}