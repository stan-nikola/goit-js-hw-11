import './css/styles.css';
import 'simple-notify/dist/simple-notify.min.css';

import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

import fetchCountries from './fetch-country-api';
import countriesListTpl from '../src/templates/countries-list.hbs';
import countryInfoTpl from '../src/templates/country-card.hbs';

import Notify from 'simple-notify';

const refs = {
  countryInput: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.countryInput.addEventListener(
  'input',
  debounce(onCountryInput, DEBOUNCE_DELAY)
);

function onCountryInput(e) {
  const inputText = e.target.value.trim();

  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
  fetchCountries(inputText).then(renderMarkup);
}

function renderMarkup(data) {
  if (data.length > 10) {
    return new Notify({
      status: 'warning',
      title: 'Too many matches found',
      text: 'Please enter a more specific name.',
      autoclose: true,
      autotimeout: 3000,
    });
  }
  if (data.length === 1) {
    return (refs.countryInfo.innerHTML = countryInfoTpl(data));
  }
  if (data.message === 'Not Found') {
    return new Notify({
      status: 'error',
      title: 'Oops',
      text: 'There is no country with that name',
      autoclose: true,
      autotimeout: 3000,
    });
  }

  refs.countryList.innerHTML = countriesListTpl(data);
}
