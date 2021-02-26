using CommerceFrontEndSite.Features.Start; // StartPage
using EPiServer; // IContentLoader
using EPiServer.Commerce.Catalog.ContentTypes; // NodeContent, EntryContentBase
using EPiServer.Core; // IContent
using Mediachase.Commerce; // ICurrentMarket
using System.Collections.Generic; // IEnumerable
using System.Linq; // Select, Reverse, Skip extension methods

namespace CommerceFrontEndSite.Features.Site
{
    public class DefaultSiteService : ISiteService
    {
        protected readonly ICurrentMarket currentMarket;
        protected readonly IContentLoader contentLoader;

        public IContentLoader Loader => contentLoader;

        public DefaultSiteService(
            ICurrentMarket currentMarket,
            IContentLoader contentLoader)
        {
            this.currentMarket = currentMarket;
            this.contentLoader = contentLoader;
        }

        public void SetSharedProperties<T>(SiteViewModel<T> viewmodel) where T : IContent
        {
            viewmodel.CurrentMarket = currentMarket.GetCurrentMarket();
            viewmodel.NavigationMenu = GetNavigationMenu();
            viewmodel.Breadcrumb = GetBreadcrumb(viewmodel.CurrentContent.ContentLink);

            if (viewmodel.CurrentContent is NodeContent)
            {
                viewmodel.PageTitle = (viewmodel.CurrentContent as NodeContent).SeoInformation.Title ?? viewmodel.CurrentContent.Name;
            }
            else if (viewmodel.CurrentContent is EntryContentBase)
            {
                viewmodel.PageTitle = (viewmodel.CurrentContent as EntryContentBase).SeoInformation.Title ?? viewmodel.CurrentContent.Name;
            }
            else if (viewmodel.CurrentContent is SitePageData)
            {
                viewmodel.PageTitle = (viewmodel.CurrentContent as SitePageData).MetaTitle ?? viewmodel.CurrentContent.Name;
            }
            else
            {
                viewmodel.PageTitle = viewmodel.CurrentContent.Name;
            }
        }

        private SiteSettingsBlock GetNavigationMenu()
        {
            if (!ContentReference.IsNullOrEmpty(ContentReference.StartPage))
            {
                return contentLoader.Get<StartPage>(ContentReference.StartPage).SiteSettings;
            }
            return null;
        }

        private IEnumerable<ContentReference> GetBreadcrumb(ContentReference contentReference)
        {
            return contentLoader.GetAncestors(contentReference)
                .Select(item => item.ContentLink)
                .Reverse()
                .Skip(1); // to remove the Root or Catalog Root
        }
    }
}