using CommerceFrontEndSite.Features.Site; // PageControllerBase
using EPiServer.Commerce.Catalog.ContentTypes; // NodeContent
using EPiServer.Core; // IContent
using System.Web.Mvc; // ActionResult

namespace CommerceFrontEndSite.Features.Start
{
    public class StartPageController : PageControllerBase<StartPage>
    {
        public StartPageController(ISiteService siteService) : base(siteService)
        {
        }

        public ActionResult Index(StartPage currentPage)
        {
            var viewmodel = new StartPageViewModel(currentPage);

            siteService.SetSharedProperties(viewmodel);

            if (!ContentReference.IsNullOrEmpty(ContentReference.StartPage))
            {
                // get the top category set in Start page settings
                // e.g. Clothes
                var topCategory = siteService.Loader
                    .Get<StartPage>(ContentReference.StartPage)
                    .SiteSettings.TopCategory;

                if (!ContentReference.IsNullOrEmpty(topCategory))
                {
                    // get child categories of top category
                    // (entries will not be included)
                    // e.g. Men, Women, Children
                    viewmodel.TopLevelCategories = siteService.Loader
                        .GetChildren<NodeContent>(topCategory);
                }
            }

            return View("~/Features/Start/StartPage.cshtml", viewmodel);
        }
    }
}