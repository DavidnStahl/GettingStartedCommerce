using EPiServer.Core; // IContent, ContentReference
using Mediachase.Commerce; // IMarket
using System.Collections.Generic; // IEnumerable

namespace CommerceFrontEndSite.Features.Site
{
    // this interface is used by the shared layout
    // so it needs to output the navigation menu
    // and information about the current market
    public interface ISiteViewModel<out T> where T : IContent
    {
        SiteSettingsBlock NavigationMenu { get; }
        T CurrentContent { get; }
        IMarket CurrentMarket { get; }
        string PageTitle { get; }
        IEnumerable<ContentReference> Breadcrumb { get; }
    }
}
