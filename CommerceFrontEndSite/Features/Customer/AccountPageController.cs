﻿using CommerceFrontEndSite.Features.Site;
using EPiServer.Core;
using EPiServer.Web.Routing;
using Mediachase.Commerce.Customers;
using Mediachase.Commerce.Customers.Profile;
using Mediachase.Commerce.Security;
using System;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace CommerceFrontEndSite.Features.Customer
{
    public class AccountPageController : PageControllerBase<AccountPage>
    {
        private readonly UrlResolver urlResolver;

        public AccountPageController(ISiteService siteService, 
            UrlResolver urlResolver) : base(siteService)
        {
            this.urlResolver = urlResolver;
        }

        public ActionResult Index(AccountPage currentPage)
        {
            var viewmodel = new SiteViewModel<AccountPage>(currentPage);
            
            siteService.SetSharedProperties(viewmodel);

            return View("~/Features/Customer/AccountPage.cshtml", viewmodel);
        }

        public ActionResult Login(AccountPage currentPage, 
            string username, string password)
        {
            if (Membership.ValidateUser(username, password))
            {
                MembershipUser account = Membership.GetUser(username);
                if (username != null)
                {
                    var profile = SecurityContext.Current.CurrentUserProfile as CustomerProfileWrapper;
                    if (profile != null)
                    {
                        CreateAuthenticationCookie(ControllerContext.HttpContext, username, Mediachase.Commerce.Core.AppContext.Current.ApplicationName, false);
                        //return Redirect(url);
                    }
                }
            }

            // ...just for a check
            return RedirectToAction("Index", new { page = ContentReference.StartPage }.page.ToPageReference());
        }

        // ToDo: Lab incustomers module
        public ActionResult CreateAccount(AccountPage currentPage, string username, string password)
        {
            return Content("You will implement account registration in Module F", "text/plain");
        }

        protected void SetContactProperties(CustomerContact contact)
        {
  
        }

        public static void CreateAuthenticationCookie(HttpContextBase httpContext, string username, string domain, bool remember)
        {
            // ... needed for cookieless authentication
            FormsAuthentication.SetAuthCookie(username, remember);
            var expirationDate = FormsAuthentication.GetAuthCookie(username, remember).Expires;

            // we need to handle ticket ourselves since we need to save session paremeters as well
            int timeout = httpContext.Session != null ? httpContext.Session.Timeout : 20;
            var ticket = new FormsAuthenticationTicket(2,
                    username,
                    DateTime.Now,
                    expirationDate == DateTime.MinValue ? DateTime.Now.AddMinutes(timeout) : expirationDate,
                    remember,
                    domain,
                    FormsAuthentication.FormsCookiePath);

            // Encrypt the ticket.
            string encTicket = FormsAuthentication.Encrypt(ticket);

            // remove the cookie, if one already exists with the same cookie name
            if (httpContext.Response.Cookies[FormsAuthentication.FormsCookieName] != null)
            {
                httpContext.Response.Cookies.Remove(FormsAuthentication.FormsCookieName);
            }

            var cookie = new HttpCookie(FormsAuthentication.FormsCookieName, encTicket);
            cookie.HttpOnly = true;

            cookie.Path = FormsAuthentication.FormsCookiePath;
            cookie.Secure = FormsAuthentication.RequireSSL;
            if (FormsAuthentication.CookieDomain != null)
            {
                cookie.Domain = FormsAuthentication.CookieDomain;
            }

            if (ticket.IsPersistent)
            {
                cookie.Expires = ticket.Expiration;
            }

            // Create the cookie.
            httpContext.Response.Cookies.Set(cookie);
        }

    }
}