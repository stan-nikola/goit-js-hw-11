import message from './notify-messages';
import fetchCountries from './fetch-country-api';
import loadSpinner from './load-spinner';
import { renderMarkup } from './render-markup';
import getRefs from './get-refs';

const refs = getRefs();

export default async function creatingUi(inputData) {
  loadSpinner.spinStart(refs.container);
  try {
    const data = await fetchCountries(inputData);
    const markup = await renderMarkup(data);
    return markup;
    // .then(renderMarkup)
    // .catch(message.onFetchError)
    // .finally(loadSpinner.spinStart(refs.container));
  } catch (error) {
    message.onFetchError();
  }
}
