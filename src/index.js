import './css/styles.css';
import 'simple-notify/dist/simple-notify.min.css';
import './css/spinner.css';

import debounce from 'lodash.debounce';
import fetchCountries from './fetch-country-api';
import getRefs from './get-refs';
import { renderMarkup, markupReset } from './render-markup';
import message from './notify-messages';
import loadSpinner from './load-spinner';

const DEBOUNCE_DELAY = 300;

const refs = getRefs();

refs.countryInput.addEventListener(
  'input',
  debounce(onCountryInput, DEBOUNCE_DELAY)
);

async function onCountryInput(e) {
  const inputData = e.target.value.trim();
  loadSpinner.spinStart(refs.container);
  markupReset();
  try {
    const data = await fetchCountries(inputData);
    return renderMarkup(data);
    // .then(renderMarkup)
    // .catch(message.onFetchError)
    // .finally(loadSpinner.spinStart(refs.container));
  } catch (error) {
    message.onFetchError();
  }
}
