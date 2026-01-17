import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import '../projects.css';

export default function SimpleGallery({ galleryID, images }) {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: `#${galleryID}`,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.on("uiRegister", function () {
    lightbox.pswp.ui.registerElement({
      name: "caption",
      order: 9,
      isButton: false,
      appendTo: "root",
      html: "",
      onInit: (el, pswp) => {
        pswp.on("change", () => {
          const slide = pswp.currSlide;
          const caption = slide?.data?.caption || slide?.data?.alt || "";
          el.innerHTML = caption;
        });
      },
    });
  });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, [galleryID, images]);

  return (
    <div className="pswp-gallery" id={galleryID}>
      {images.map((image, index) => (
        <a
          href={image.src}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          data-pswp-caption={image.alt || ""}
          key={`${galleryID}-${index}`}
        >
          <img src={image.thumb || image.src} alt={image.alt || ""} />
        </a>
      ))}
    </div>
  );
}
