import getData from './get-data-api';
import renderMarkup from './render-markup';
import notify from './notifications';
import galleryViewer from './gallery-viewer';
import getRef from './get-ref';

let newUserInput = '';
let page;

export default async function userInterface(userInput) {
  try {
    page = 1;

    newUserInput = userInput;
    getRef('.card__list').innerHTML = '';

    const responseData = await getData(newUserInput, page);
    let responseHits = responseData.data.hits;
    console.log(userInput);

    if (responseHits.length == 0) {
      return notify.notFoundNotify();
    }

    renderMarkup(responseHits);
    notify.foundNumberHits(responseData.data.total);
    galleryViewer();
  } catch (error) {
    console.log(error);
  }
}

const onEntry = entries => {
  entries.forEach(async entry => {
    if (entry.isIntersecting && getRef('.card__item')) {
      console.log('Пора грузить еще статьи' + Date.now());
      console.log(newUserInput);
      page += 1;
      const responseData = await getData(newUserInput, page);
      let responseHits = responseData.data.hits;
      renderMarkup(responseHits);
    }
  });
};

const observer = new IntersectionObserver(onEntry, {
  rootMargin: '150px',
});
observer.observe(getRef('.footer'));
