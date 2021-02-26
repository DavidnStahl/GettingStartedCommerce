using EPiServer.Core; // PageData

namespace CommerceFrontEndSite.Features.Site
{
    public abstract class SitePageData : PageData
    {
        public virtual string MetaTitle { get; set; }
        public virtual string MetaDescription { get; set; }
    }
}