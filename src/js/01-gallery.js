// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import galleryCardsTpl from '../templates/gallery-cards.hbs';

import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryCardsTpl(galleryItems);
}

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  alertErrorMessage:
    'Изображение не найдено, будет загружено следующее изображение',
  disableRightClick: true,
});
