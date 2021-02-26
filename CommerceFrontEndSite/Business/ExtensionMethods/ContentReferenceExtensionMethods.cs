using EPiServer.Core;

namespace CommerceFrontEndSite.Business.ExtensionMethods
{
    public static class ContentReferenceExtensionMethods
    {
        public static string GetNavLinkClass(
            this ContentReference content, ContentReference currentContent)
        {
            string cssClass = "nav-link";

            if (content.CompareToIgnoreWorkID(currentContent))
            {
                cssClass += " active";
            }

            return cssClass;
        }
    }
}