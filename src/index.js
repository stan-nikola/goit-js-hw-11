import 'modern-normalize';
import './sass/main.scss';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import getData from './js/get-data-api';
import getRef from './js/get-ref';
import renderMarkup from './js/render-markup';
import notify from './js/notifications';

getRef('#search-form').addEventListener('submit', onSearchInput);

async function onSearchInput(e) {
  e.preventDefault();
  const userInput = e.currentTarget.searchQuery.value;

  try {
    const responseData = await getData(userInput);

    const responseHits = responseData.data.hits;

    if (responseHits.length == 0) {
      return notify.notFoundNotify();
    }

    renderMarkup(responseHits);
    notify.foundNumberHits(responseData.data.hits.length);

    new SimpleLightbox('.card__list a', {
      captionsData: 'alt',
      captionDelay: 250,
      alertErrorMessage:
        'Изображение не найдено, будет загружено следующее изображение',
      disableRightClick: true,
    });
  } catch (error) {
    console.log(error);
  }
}
