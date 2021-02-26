using CommerceFrontEndSite.Features.Site;

namespace CommerceFrontEndSite.Features.Customer
{
    public class OrdersPageViewModel : SiteViewModel<OrdersPage>
    {
        public OrdersPageViewModel(OrdersPage currentContent) : base(currentContent)
        {
        }

        // additional properties specific to Orders page
        public string TrackingNumber;
    }
}