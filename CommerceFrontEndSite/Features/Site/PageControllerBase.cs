using EPiServer.Web.Mvc; // PageController<T>, RedirectToAction
using System.Web.Mvc; // ActionResult
using System.Web.Security; // FormsAuthentication

namespace CommerceFrontEndSite.Features.Site
{
    public abstract class PageControllerBase<T>
        : PageController<T> where T : SitePageData
    {
        protected readonly ISiteService siteService;

        public PageControllerBase(ISiteService siteService)
        {
            this.siteService = siteService;
        }

        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Index");
        }
    }
}