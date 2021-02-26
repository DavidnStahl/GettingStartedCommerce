using CommerceFrontEndSite.Features.Site;
using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using System.ComponentModel.DataAnnotations;

namespace CommerceFrontEndSite.Features.Cart
{
    [ContentType(DisplayName = "Cart",
        Description = "Use this to show the visitor's shopping cart.")]
    [SiteCommerceIcon]
    public class CartPage : SitePageData
    {
        [CultureSpecific]
        [Display(
            Name = "Main body",
            Description = "The main body Cart Page can be used with the XHTML-editor for example text, images and tables.",
            GroupName = SystemTabNames.Content,
            Order = 1)]
        public virtual XhtmlString MainBody { get; set; }
    }
}