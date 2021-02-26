using CommerceFrontEndSite.Features.Site;
using EPiServer.Commerce.Marketing;
using EPiServer.Commerce.Order;
using Mediachase.Commerce;
using System.Collections.Generic;

namespace CommerceFrontEndSite.Features.Cart
{
    public class CartPageViewModel : SiteViewModel<CartPage>
    {
        public CartPageViewModel(CartPage currentContent) : base(currentContent)
        {
        }

        // additional properties specific to Cart page
        public IEnumerable<ILineItem> LineItems { get; set; }
        public Money SubTotal { get; set; }
        public string Message { get; set; }
        public Dictionary<ILineItem, ValidationIssue> ValidationErrors { get; set; }
        public IEnumerable<RewardDescription> Rewards { get; set; }
    }
}