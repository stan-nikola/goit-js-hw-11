import getData from './get-data-api';
import renderMarkup from './render-markup';
import notify from './notifications';
import getRef from './get-ref';
import SimpleLightbox from 'simplelightbox';

let newUserInput;
let page;
let gallery;

const galleryOptions = {
  captionsData: 'data',
  captionDelay: 250,
  alertErrorMessage: 'Image not found, next image will be loaded',
  disableRightClick: true,
};

export default async function userInterface(userInput) {
  getRef('.js-up-btn').classList.add('up-btn--hidden');
  getRef('.js-up-btn').classList.remove('animate__backInUp');
  try {
    page = 1;

    newUserInput = userInput;
    getRef('.card__list').innerHTML = '';

    const responseData = await getData(newUserInput, page);
    let responseHits = responseData.data.hits;

    if (responseHits.length === 0) {
      return notify.notFoundNotify();
    }

    renderMarkup(responseHits);
    notify.foundNumberHits(responseData.data.total, newUserInput);
    gallery = new SimpleLightbox('.card__list a', galleryOptions);

    const { height: cardHeight } =
      getRef('.card__list').firstElementChild.getBoundingClientRect();

    setTimeout(() => {
      window.scrollBy({
        top: cardHeight * 0.3,
        behavior: 'smooth',
      });
    }, 800);

    if (getRef('.card__item')) {
      getRef('.js-up-btn').classList.remove('up-btn--hidden');
      getRef('.js-up-btn').classList.add(
        'animate__animated',
        'animate__backInUp'
      );
    }
  } catch (error) {
    console.log(error);
    notify.serverError();
  }
}

const onEntry = entries => {
  entries.forEach(async entry => {
    if (entry.isIntersecting && getRef('.card__item')) {
      page += 1;
      const responseData = await getData(newUserInput, page);
      let responseHits = responseData.data.hits;
      renderMarkup(responseHits);
      gallery.refresh();
    }
  });
};

const observer = new IntersectionObserver(onEntry, {
  rootMargin: '700px',
});
observer.observe(getRef('.footer'));

getRef('.js-up-btn').addEventListener('click', up);

function up() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
