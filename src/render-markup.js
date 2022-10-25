import countriesListTpl from '../src/templates/countries-list.hbs';
import countryInfoTpl from '../src/templates/country-card.hbs';
import message from './notify-messages';

import getRefs from './get-refs';
const refs = getRefs();

export function renderMarkup(data) {
  if (data.message === 'Not Found') {
    refs.countryList.innerHTML = '';
    return message.onError();
  }

  if (data.message === 'Page Not Found') {
    refs.countryList.innerHTML = '';
    return message.onEmptyField();
  }

  if (data.length > 10) {
    return message.onManyMatches();
  }
  if (data.length === 1) {
    message.onFindCountry();

    return (refs.countryInfo.innerHTML = countryInfoTpl(data));
  }

  refs.countryList.innerHTML = countriesListTpl(data);
}

export function markupReset() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}
