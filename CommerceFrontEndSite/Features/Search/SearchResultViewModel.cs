using CommerceFrontEndSite.Features.Site; //

namespace CommerceFrontEndSite.Features.Search
{
    public class SearchResultViewModel : SiteViewModel<SearchPage>
    {
        public SearchResultViewModel(SearchPage currentContent) : base(currentContent)
        {
        }

        // no paging settings or other luxery
        // un-comment when the catalog models exist
        /*
        public IEnumerable<string> TotalHits { get; set; }
        public IEnumerable<FashionNode> Nodes { get; set; }
        public IEnumerable<FashionProduct> Products { get; set; }
        public IEnumerable<FashionVariation> Variants { get; set; }
        public IEnumerable<IContent> AllContent { get; set; }
        public IEnumerable<string> Facets { get; set; }
        */
    }
}