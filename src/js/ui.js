import getData from './get-data-api';
import renderMarkup from './render-markup';
import renderMarkupScroll from './render-markup';
import notify from './notifications';
import galleryViewer from './gallery-viewer';
import getRef from './get-ref';

let page = 1;

export default async function userInterface(userInput) {
  try {
    const responseData = await getData(userInput, page);
    let responseHits = responseData.data.hits;
    if (responseHits.length == 0) {
      return notify.notFoundNotify();
    }
    page = 1;

    getRef('.card__list').innerHTML = '';

    renderMarkup(responseHits);
    notify.foundNumberHits(responseData.data.total);
    galleryViewer();

    const onEntry = entries => {
      entries.forEach(async entry => {
        if (entry.isIntersecting && userInput !== '') {
          console.log('Пора грузить еще статьи' + Date.now());
          page += 1;

          const newResponseData = await getData(userInput, page);
          console.log(userInput);
          responseHits = newResponseData.data.hits;

          renderMarkupScroll(responseHits);
        }
      });
    };

    const observer = new IntersectionObserver(onEntry, {
      rootMargin: '150px',
    });
    observer.observe(getRef('.footer'));
  } catch (error) {
    console.log(error);
  }
}
