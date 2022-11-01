import 'modern-normalize';
import './sass/main.scss';

import 'simplelightbox/dist/simple-lightbox.min.css';

import getRef from './js/get-ref';
import userInterface from './js/ui';
import resetRespHits from './js/ui';

import './js/intersection-observer';
getRef('#search-form').addEventListener('submit', onSearchInput);

function onSearchInput(e) {
  e.preventDefault();
  let userInput = e.currentTarget.searchQuery.value;

  userInterface(userInput);
  // resetRespHits();
}
