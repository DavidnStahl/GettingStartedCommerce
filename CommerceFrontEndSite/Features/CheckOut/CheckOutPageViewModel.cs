using CommerceFrontEndSite.Features.Site;

namespace CommerceFrontEndSite.Features.CheckOut
{
    public class CheckOutPageViewModel : SiteViewModel<CheckOutPage>
    {
        public CheckOutPageViewModel(CheckOutPage currentContent) : base(currentContent)
        {
        }

        // additional properties specific to Check Out page
    }
}