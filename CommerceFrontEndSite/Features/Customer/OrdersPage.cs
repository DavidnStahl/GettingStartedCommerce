using CommerceFrontEndSite.Features.Site;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;

namespace CommerceFrontEndSite.Features.Customer
{
    [ContentType(DisplayName = "Orders", 
        Description = "Use this to show the visitor's orders.")]
    [SiteImageUrl]
    public class OrdersPage : SitePageData
    {
    }
}