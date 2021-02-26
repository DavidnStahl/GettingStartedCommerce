using CommerceFrontEndSite.Features.Site;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;

namespace CommerceFrontEndSite.Features.Customer
{
    [ContentType(DisplayName = "Account", 
        Description = "Use this to show the visitor's account information.")]
    [SiteImageUrl]
    public class AccountPage : SitePageData
    {
    }
}