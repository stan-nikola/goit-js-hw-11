import countriesListTpl from '../src/templates/countries-list.hbs';
import countryInfoTpl from '../src/templates/country-card.hbs';

import message from './notify-messages';
import loadSpinner from './load-spinner';
import getRefs from './get-refs';

const refs = getRefs();

export function renderMarkup(data) {
  if (data.message === 'Not Found') {
    refs.countryList.innerHTML = '';
    loadSpinner.spinStop();
    return message.onError();
  }

  if (data.message === 'Page Not Found') {
    refs.countryList.innerHTML = '';
    loadSpinner.spinStop();
    return message.onEmptyField();
  }

  if (data.length > 10) {
    loadSpinner.spinStop();
    return message.onManyMatches();
  }
  if (data.length === 1) {
    message.onFindCountry();

    refs.countryInfo.innerHTML = countryInfoTpl(data);

    // const languageRef = document.querySelector('#language');

    // refs.countryInfo.insertAdjacentHTML(
    //   'beforeend',
    //   `<li class="country__info__data""><span class="country__info__text">Languages:</span>${languageRef.textContent.slice(
    //     10,
    //     -2
    //   )} </li>`
    // );
    // languageRef.remove();
    loadSpinner.spinStop();
    return;
  }
  refs.countryList.innerHTML = countriesListTpl(data);
  loadSpinner.spinStop();
}

export function markupReset() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}
