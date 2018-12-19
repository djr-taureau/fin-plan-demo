using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.Extensions.Options;
using Lifeworks.AADB2C.UI.Models;
using Microsoft.AspNetCore.Mvc;


using System.Collections.Generic;

namespace Lifeworks.AADB2C.UI.Services
{
    class SettingsResult<T>: Dictionary<string, T>
    { }

    public class SettingsService: LifeworksApiServiceBase {
        public SettingsService(IOptions<AppSettings> appSettings)
        : base(appSettings) { }
    
        
        async Task<Dictionary<string, T>> GetSettings<T>(string baseUrl, string firm)
        {
            // todo: name it proprely
            // dynamic response1 = await Get<dynamic>($"settings/{firm}/{setting}");
            return await Get<Dictionary<string, T>>($"settings?entityGuid={firm}");
        }   

        public async Task<bool> IsWhiteLabled(string baseUrl, string firm)
        {
            Dictionary<string, bool> results = await GetSettings<bool>(baseUrl, firm);
            var isWhiteLabeled = results.GetValueOrDefault("isWhiteLabeled", false);
            return isWhiteLabeled;
        }   
    }
}