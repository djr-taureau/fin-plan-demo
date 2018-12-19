using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Net.Http.Headers;
using Lifeworks.AADB2C.UI.Models;
using Lifeworks.AADB2C.UI.Services;

namespace Lifeworks.AADB2C.UI
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<SettingsService, SettingsService>();
            services.AddTransient<TOSService, TOSService>();
            services.AddTransient<ContentService, ContentService>();
            services.AddResponseCaching();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.Configure<AppSettings>(Configuration.GetSection("AppSettings"));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment() || env.IsEnvironment("Local"))
            {
                app.UseDeveloperExceptionPage();
                app.UseStaticFiles();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
                app.UseStaticFiles(new StaticFileOptions
                {
                    OnPrepareResponse = (context) =>
                    {
                        var headers = context.Context.Response.GetTypedHeaders();

                        headers.CacheControl = new CacheControlHeaderValue
                        {
                            Public = true,
                            MaxAge = TimeSpan.FromDays(365)
                        };
                    }
                });
                app.UseResponseCaching();
            }

            app.UseHttpsRedirection();




            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "consent_route",
                    template: "consent/{id?}",
                    defaults: new
                    {
                        controller = "IEF",
                        action = "TosConsent",
                        iefView = "consent"
                    });
                routes.MapRoute(
                    name: "default_route",
                    template: "{iefView}/{id?}",
                    defaults: new
                    {
                        controller = "IEF",
                        action = "Index",
                        iefView = "index"
                    });
                routes.MapRoute(
                    "catch_all",
                    "{*.}",
                    new { controller = "IEF", action = "Index", iefView = "index" }
                );
            });
        }
    }
}
