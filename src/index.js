import getData from './js/get-data-api';
import getRefs from './js/get-refs';
import renderMarkup from './js/render-markup';

getRefs('#search-form').addEventListener('submit', onSearchInput);

async function onSearchInput(e) {
  e.preventDefault();
  const userInput = e.currentTarget.searchQuery.value;
  try {
    const responseData = await getData(userInput);
    renderMarkup(responseData.data.hits);
  } catch (error) {
    console.log(error);
  }
}
