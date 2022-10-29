import './css/styles.css';
import 'simple-notify/dist/simple-notify.min.css';
import './css/spinner.css';

import debounce from 'lodash.debounce';
import getRefs from './get-refs';
import { markupReset } from './render-markup';
import creatingUi from './ui';

const DEBOUNCE_DELAY = 300;

const refs = getRefs();

refs.countryInput.addEventListener(
  'input',
  debounce(onCountryInput, DEBOUNCE_DELAY)
);

function onCountryInput(e) {
  const inputData = e.target.value.trim();

  markupReset();
  creatingUi(inputData);
}
