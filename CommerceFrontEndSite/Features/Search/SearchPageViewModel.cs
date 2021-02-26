using CommerceFrontEndSite.Features.Site; // SiteViewModel<T>

namespace CommerceFrontEndSite.Features.Search
{
    public class SearchPageViewModel : SiteViewModel<SearchPage>
    {
        public SearchPageViewModel(SearchPage currentContent) : base(currentContent)
        {
        }
    }
}