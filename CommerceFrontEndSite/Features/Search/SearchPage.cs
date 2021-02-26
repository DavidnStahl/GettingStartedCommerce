using CommerceFrontEndSite.Features.Site; // [SiteSearchIcon], SitePageData
using EPiServer.DataAnnotations; // [ContentType]

namespace CommerceFrontEndSite.Features.Search
{
    [ContentType(DisplayName = "Search", 
        Description = "Use this to allow visitors to search catalogs.")]
    [SiteSearchIcon]
    public class SearchPage : SitePageData
    {
    }
}