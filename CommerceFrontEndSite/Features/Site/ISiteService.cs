using EPiServer; // IContentLoader
using EPiServer.Core; // IContent

namespace CommerceFrontEndSite.Features.Site
{
    public interface ISiteService
    {
        void SetSharedProperties<T>(SiteViewModel<T> viewModel) where T : IContent;
        IContentLoader Loader { get; }
    }
}
