using EPiServer.Core;
using EPiServer.DataAbstraction;
using EPiServer.DataAnnotations;
using EPiServer.Framework.DataAnnotations;

namespace CommerceFrontEndSite.Features.Catalog
{
    [ContentType(DisplayName = "Image", 
        Description = "Use this to upload image files.")]
    [MediaDescriptor(ExtensionString = "jpg,jpeg,jpe,ico,gif,bmp,png")]
    public class ImageFile : ImageData
    {
        public virtual string ImageDescription { get; set; }
    }
}