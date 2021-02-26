using EPiServer.Core; // IContent, ContentReference
using Mediachase.Commerce; // IMarket
using System.Collections.Generic; // IEnumerable

namespace CommerceFrontEndSite.Features.Site
{
    // This view model can be used by simple pages and catalog content that
    // do not need custom properties.
    // Controllers should inherit from PageControllerBase or CatalogControllerBase
    // so they inherit the ISiteService with its CreateViewModel method
    public class SiteViewModel<T> : ISiteViewModel<T> where T : IContent
    {
        public SiteSettingsBlock NavigationMenu { get; set; }
        public T CurrentContent { get; set; }
        public IMarket CurrentMarket { get; set; }
        public IEnumerable<ContentReference> Breadcrumb { get; set; }
        public string PageTitle { get; set; }

        public SiteViewModel(T currentContent)
        {
            CurrentContent = currentContent;
        }
    }
}