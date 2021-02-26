using CommerceFrontEndSite.Features.Site; // PageControllerBase, ISiteService
using EPiServer.Commerce.Marketing; // IPromotionEngine
using EPiServer.Commerce.Order; // IOrderRepository, IOrderGroupCalculator, ILineItemValidator, IPlacedPriceProcessor, IInventoryProcessor
using EPiServer.Security; // PrincipalInfo
using Mediachase.Commerce.Security; // GetContactId() and GetCustomerContact() extension methods
using System.Collections.Generic; // Dictionary<T, T>
using System.Web.Mvc; // ActionResult

namespace CommerceFrontEndSite.Features.Cart
{
    public class CartPageController : PageControllerBase<CartPage>
    {
        private readonly IOrderRepository orderRepository;
        private readonly IOrderGroupCalculator orderGroupCalculator;
        private readonly IPromotionEngine promotionEngine;
        private readonly ILineItemValidator lineItemValidator;
        private readonly IPlacedPriceProcessor placedPriceProcessor;
        private readonly IInventoryProcessor inventoryProcessor;

        public CartPageController(ISiteService siteService,
            IOrderRepository orderRepository,
            IOrderGroupCalculator orderGroupCalculator,
            IPlacedPriceProcessor placedPriceProcessor,
            ILineItemValidator lineItemValidator,
            IPromotionEngine promotionEngine,
            IInventoryProcessor inventoryProcessor)
            : base(siteService)
        {
            this.orderRepository = orderRepository;
            this.orderGroupCalculator = orderGroupCalculator;
            this.promotionEngine = promotionEngine;
            this.lineItemValidator = lineItemValidator;
            this.placedPriceProcessor = placedPriceProcessor;
            this.inventoryProcessor = inventoryProcessor;
        }

        public ActionResult Index(CartPage currentPage)
        {
            var viewmodel = new CartPageViewModel(currentPage);
                
            siteService.SetSharedProperties(viewmodel);

            // TODO: Exercise D2

            return View("~/Features/Cart/NoCart.cshtml", viewmodel);
        }
    }
}