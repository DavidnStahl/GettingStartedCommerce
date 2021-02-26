using CommerceFrontEndSite.Features.Site; // ISiteService
using EPiServer.Commerce.Catalog; // AssetUrlResolver, ThumbnailUrlResolver
using EPiServer.Commerce.Catalog.ContentTypes; // CatalogContentBase
using EPiServer.Web.Mvc; // ContentController<T>
using EPiServer.Web.Routing; // UrlResolver
using System.Web.Mvc; // ActionResult
using System.Web.Security; // FormsAuthentication

namespace CommerceFrontEndSite.Features.Catalog
{
    public class CatalogControllerBase<T> 
        : ContentController<T> where T : CatalogContentBase
    {
        protected readonly ISiteService siteService;

        protected readonly UrlResolver urlResolver;
        protected readonly AssetUrlResolver assetUrlResolver;
        protected readonly ThumbnailUrlResolver thumbnailUrlResolver;

        public CatalogControllerBase(ISiteService siteService,
            UrlResolver urlResolver, AssetUrlResolver assetUrlResolver, 
            ThumbnailUrlResolver thumbnailUrlResolver)
        {
            this.siteService = siteService;
            this.urlResolver = urlResolver;
            this.assetUrlResolver = assetUrlResolver;
            this.thumbnailUrlResolver = thumbnailUrlResolver;
        }

        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Index");
        }
    }
}