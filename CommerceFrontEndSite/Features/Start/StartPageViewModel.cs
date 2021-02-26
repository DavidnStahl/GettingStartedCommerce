using CommerceFrontEndSite.Features.Site; // SiteViewModel
using EPiServer.Commerce.Catalog.ContentTypes; // NodeContent
using System.Collections.Generic; // IEnumerable

namespace CommerceFrontEndSite.Features.Start
{
    public class StartPageViewModel : SiteViewModel<StartPage>
    {
        public StartPageViewModel(StartPage currentContent) : base(currentContent)
        {
        }

        // additional properties specific to Start page
        public IEnumerable<NodeContent> TopLevelCategories { get; set; }
    }
}