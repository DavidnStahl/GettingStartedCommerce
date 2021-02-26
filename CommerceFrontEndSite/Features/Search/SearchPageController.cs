using CommerceFrontEndSite.Features.Site;
using EPiServer.Core;
using EPiServer.Web.Routing;
using Mediachase.Commerce.Catalog;
using System.Collections.Generic;
using System.Web.Mvc;

namespace CommerceFrontEndSite.Features.Search
{
    public class SearchPageController : PageControllerBase<SearchPage>
    {
        private IEnumerable<IContent> localContent { get; set; }

        public readonly ReferenceConverter referenceConverter;
        public readonly UrlResolver urlResolver;

        public SearchPageController(ISiteService siteService,
            ReferenceConverter referenceConverter, UrlResolver urlResolver) 
            : base(siteService)
        {
            this.referenceConverter = referenceConverter;
            this.urlResolver = urlResolver;
        }

        public ActionResult Index(SearchPage currentPage)
        {
            var viewmodel = new SearchPageViewModel(currentPage);

            siteService.SetSharedProperties(viewmodel);

            return View("~/Features/Search/SearchPage.cshtml", viewmodel);
        }

        public ActionResult Search(SearchPage currentPage, string keyWord)
        {
            // ToDo: SearchHelper and Criteria 


            // ToDo: Search 


            // ToDo: Facets


            // ToDo: As a last step - un-comment and fill up the ViewModel
            var viewmodel = new SearchResultViewModel(currentPage);

            siteService.SetSharedProperties(viewmodel);

            /*
             searchResultViewModel.TotalHits = new List<string> { "" }; // change
             searchResultViewModel.Nodes = localContent.OfType<FashionNode>();
             searchResultViewModel.Products = localContent.OfType<FashionProduct>();
             searchResultViewModel.Variants = localContent.OfType<FashionVariation>();
             searchResultViewModel.AllContent = localContent;
             searchResultViewModel.Facets = facetList;
             */

            return View("~/Features/Search/SearchPageResults.cshtml", viewmodel);
        }
    }
}