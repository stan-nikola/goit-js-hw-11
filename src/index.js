import './css/styles.css';
import 'simple-notify/dist/simple-notify.min.css';
import './css/spinner.css';

import debounce from 'lodash.debounce';
import fetchCountries from './fetch-country-api';
import getRefs from './get-refs';
import { renderMarkup, markupReset } from './render-markup';
import message from './notify-messages';
import loadSpinner from './load-spinner';

const DEBOUNCE_DELAY = 500;

const refs = getRefs();

refs.countryInput.addEventListener(
  'input',
  debounce(onCountryInput, DEBOUNCE_DELAY)
);

function onCountryInput(e) {
  const inputText = e.target.value.trim();
  markupReset();
  fetchCountries(inputText)
    .then(renderMarkup)
    .catch(message.onFetchError)
    .finally(loadSpinner.loadingStart(refs.container));
}
