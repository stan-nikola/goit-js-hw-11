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

    const changedData = data.map(el => ({
      ...el,
      languages: Object.values(el.languages).join(', '),
      latlng: Object.values(el.capitalInfo.latlng).join('°, '),
    }))[0];

    refs.countryInfo.innerHTML = countryInfoTpl(changedData);

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
