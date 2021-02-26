using CommerceFrontEndSite.Features.Site; // SitePageData, SiteSettingsBlock, SiteStartIcon
using EPiServer.Core; // ContentReference, XhtmlString
using EPiServer.DataAbstraction; // SystemTabNames
using EPiServer.DataAnnotations; // [CultureSpecific], [ContentType]
using System.ComponentModel.DataAnnotations; // [Display]

namespace CommerceFrontEndSite.Features.Start
{
    [ContentType(DisplayName = "Start",
        Description = "Use this for the home page.")]
    [SiteStartIcon]
    public class StartPage : SitePageData
    {
        [CultureSpecific]
        [Display(
            Name = "Main body Start Page",
            Description = "The main body will be used with the XHTML-editor.",
            GroupName = SystemTabNames.Content,
            Order = 1)]
        public virtual XhtmlString MainBody { get; set; }

        [Display(Name = "Site Settings")]
        public virtual SiteSettingsBlock SiteSettings { get; set; }

        public virtual ContentReference CampaignLink { get; set; }
    }
}