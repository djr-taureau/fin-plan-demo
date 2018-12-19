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
    public abstract class LifeworksApiServiceBase
    {
        private string HOST_URL;
        protected string HostUrl
        {
            get
            {
                return HOST_URL;
            }
        }

        private HttpClient client;
        protected AppSettings settings;

        public LifeworksApiServiceBase(IOptions<AppSettings> appSettings)
        {
            settings = appSettings.Value;
            HOST_URL = appSettings.Value.ApiUrl;
            client = new HttpClient();
        }
        ~LifeworksApiServiceBase()
        {
            client.CancelPendingRequests();
            client.Dispose();
        }

        protected bool IsDebugMode() {
            bool isDebugMode = false;
#if DEBUG
            isDebugMode = true;
#endif
            return isDebugMode;
        }

        protected async Task<T> Get<T>(string url)
        {
            HttpResponseMessage response = await client.GetAsync($"{HostUrl}/{url}");

            if (response.IsSuccessStatusCode)
            {
                string valueResult = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<T>(valueResult);
            }
            return default(T);
        }
    }
}