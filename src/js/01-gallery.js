// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Descris în documentație
import SimpleLightbox from 'simplelightbox';
// Import suplimentar de stil
import 'simplelightbox/dist/simple-lightbox.min.css';

/** My Code */
function createGalleryMarkup(items) { // function to create elements inside the ul.gallery element.
  const gallery = document.querySelector('ul.gallery'); // variable that stores the ul.gallery element.

  items.forEach(item => { // for each objevt inside the galleryItems:
    const createLiEl = document.createElement('li'); // create li element.
    createLiEl.classList.add('gallery_item'); // give it a class of .gallery_item.

    const createATag = document.createElement('a'); // create anchor element.
    createATag.classList.add('gallery_link'); // give it a class of .gallery_link.
    createATag.setAttribute('href', item.original); // set an href attribute equal with the ORIGINAL property of galleryItems variable.

    const createImg = document.createElement('img'); // crearte img element
    createImg.classList.add('gallery_image'); // give it a class of .gallery_image.
    createImg.setAttribute('src', item.preview); // set an src attribute equal with th PREVIEW property of galleryItems variable.
    createImg.setAttribute('alt', item.description); // set an alt attribute equal with th DESCRIPTION property of galleryItems variable.

    createATag.appendChild(createImg); // inside the anchor tag, append the img element.
    createLiEl.appendChild(createATag); // inside li element, append the anchor tag.
    gallery.appendChild(createLiEl); // inside ul.gallery, append the li element.
  });
}

createGalleryMarkup(galleryItems); // call the function above.

document.addEventListener('DOMContentLoaded', function () { // function triggered by an event listener when something happens on the DOM. (at least so I think)
    const gallery = new SimpleLightbox('.gallery_link', { // node.js call SimpleLightbox on a..gallery_link element.
      captionsData: 'alt', // Use the 'alt' attribute as the source for captions
      captionDelay: 250, // Delay the caption by 250 milliseconds after the image is opened
      captionPosition: 'bottom' // Position the caption at the bottom
    });
  });


