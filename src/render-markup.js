import countriesListTpl from '../src/templates/countries-list.hbs';
import countryInfoTpl from '../src/templates/country-card.hbs';
import message from './notify-messages';
import refs from './refs';
console.log(refs);

export function renderMarkup(data) {
  if (data.length > 10) {
    return message.onManyMatches();
  }
  if (data.length === 1) {
    return (refs.countryInfo.innerHTML = countryInfoTpl(data));
  }
  if (data.message === 'Not Found') {
    refs.countryList.innerHTML = '';
    message.onError();
  }
  if (data.message === 'Page Not Found') {
    return message.onEmptyField();
  }

  refs.countryList.innerHTML = countriesListTpl(data);
}

export function markupReset() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}
