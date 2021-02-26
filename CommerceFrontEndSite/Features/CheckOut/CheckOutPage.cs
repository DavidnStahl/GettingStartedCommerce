using CommerceFrontEndSite.Features.Site;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;

namespace CommerceFrontEndSite.Features.CheckOut
{
    [ContentType(DisplayName = "Check Out", 
        Description = "Use this to allow the visitor to check out.")]
    [SiteImageUrl]
    public class CheckOutPage : SitePageData
    {
    }
}