import 'modern-normalize';
import 'animate.css';
import './sass/main.scss';

import 'simplelightbox/dist/simple-lightbox.min.css';

import getRef from './js/get-ref';
import userInterface from './js/ui';

getRef('#search-form').addEventListener('submit', onSearchInput);

function onSearchInput(e) {
  e.preventDefault();

  const userInput = e.currentTarget.searchQuery.value;

  userInterface(userInput);
}
