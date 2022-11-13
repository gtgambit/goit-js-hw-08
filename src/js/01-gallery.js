// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const divEl = document.querySelector(".gallery");

const gallery = galleryItems
  .map(
    (img) =>
      `<div class="gallery__item"><a class="gallery__link" href="${img.original}"><img class="gallery__image" src="${img.preview}" data-source="${img.original}" alt="${img.description}"/></a></div>`
  )
  .join("");

divEl.innerHTML = gallery;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 350,
});
