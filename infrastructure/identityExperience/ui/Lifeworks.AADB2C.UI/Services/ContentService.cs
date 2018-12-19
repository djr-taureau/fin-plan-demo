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
    public class ContentResult
    {
        public string content { get; set; }
    }

    public class ContentInfoResult
    {
        public Dictionary<string, string> headers { get; set; }
        public Dictionary<string, string> metadata { get; set; }
        public string url { get; set; }
        public string request { get; set; }
    }

    public class ContentService: LifeworksApiServiceBase {
        public ContentService(IOptions<AppSettings> appSettings)
        : base(appSettings) { }

        public async Task<ContentInfoResult> GetContentInfo(string contentUrl) {
            return await Get<ContentInfoResult>($"{contentUrl}?output=info");
        }

        public async Task<ContentResult> GetContent(string contentUrl) {
            return await Get<ContentResult>(contentUrl);
        }

        public async Task<string> GetStorageUrl(string contentUrl) {
            ContentInfoResult result = await GetContentInfo(contentUrl);
            if(result != null) {
                return result.url;
            }
            return "";
        }

        public async Task<string> GetContents(string contentUrl) {
            ContentResult result = await GetContent(contentUrl);
            if(result != null) {
                return result.content;
            }
            return "";
        }
    }
}