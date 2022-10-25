import './css/styles.css';
import 'simple-notify/dist/simple-notify.min.css';

import debounce from 'lodash.debounce';
import fetchCountries from './fetch-country-api';
import refs from './refs';
import { renderMarkup, markupReset } from './render-markup';

const DEBOUNCE_DELAY = 300;

refs.countryInput.addEventListener(
  'input',
  debounce(onCountryInput, DEBOUNCE_DELAY)
);

function onCountryInput(e) {
  const inputText = e.target.value.trim();
  markupReset();
  fetchCountries(inputText).then(renderMarkup);
}
