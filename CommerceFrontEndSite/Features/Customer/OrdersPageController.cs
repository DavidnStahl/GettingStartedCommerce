using CommerceFrontEndSite.Features.Site;
using System.Web.Mvc;

namespace CommerceFrontEndSite.Features.Customer
{
    public class OrdersPageController : PageControllerBase<OrdersPage>
    {
        public OrdersPageController(ISiteService siteService) : base(siteService)
        {
        }

        public ActionResult Index(OrdersPage currentPage, string passedAlong)
        {
            var viewmodel = new OrdersPageViewModel(currentPage);

            siteService.SetSharedProperties(viewmodel);

            viewmodel.TrackingNumber = passedAlong;

            return View("~/Features/Customer/OrdersPage.cshtml", viewmodel);
        }
    }
}