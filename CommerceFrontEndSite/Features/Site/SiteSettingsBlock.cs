using CommerceFrontEndSite.Features.Cart; // CartPage
using CommerceFrontEndSite.Features.CheckOut; // CheckOutPage
using CommerceFrontEndSite.Features.Customer; // AccountPage, OrdersPage
using CommerceFrontEndSite.Features.Search; // SearchPage
using EPiServer.Commerce; // UIHint.CatalogContent
using EPiServer.Core; // BlockData, ContentReference
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations; // ContentType, AllowedTypes
using System.ComponentModel.DataAnnotations; // Display

namespace CommerceFrontEndSite.Features.Site
{
    [ContentType(DisplayName = "Site Settings", 
        Description = "Use this to set navigation and other options.")]
    public class SiteSettingsBlock : BlockData
    {
        [Display(Name = "Cart page", Order = 10)]
        [AllowedTypes(typeof(CartPage))]
        public virtual ContentReference CartPage { get; set; }

        [Display(Name = "Check Out page", Order = 20)]
        [AllowedTypes(typeof(CheckOutPage))]
        public virtual ContentReference CheckOutPage { get; set; }

        [Display(Name = "Account page", Order = 30)]
        [AllowedTypes(typeof(AccountPage))]
        public virtual ContentReference AccountPage { get; set; }

        [Display(Name = "Orders page", Order = 40)]
        [AllowedTypes(typeof(OrdersPage))]
        public virtual ContentReference OrdersPage { get; set; }

        [Display(Name = "Search page", Order = 50)]
        [AllowedTypes(typeof(SearchPage))]
        public virtual ContentReference SearchPage { get; set; }

        [Display(Name = "Top category", Order = 110)]
        [UIHint(UIHint.CatalogContent)]
        public virtual ContentReference TopCategory { get; set; }

        [Display(Name = "Catalog start page", Order = 120)]
        public virtual ContentReference CatalogStartPageLink { get; set; }
    }
}