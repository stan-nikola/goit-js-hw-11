import photoCardsTpl from '../templates/photo-cards.hbs';
import getRef from './get-ref';

export default function renderMarkup(dataArr) {
  // getRef('.card__list').innerHTML = photoCardsTpl(dataArr);
  getRef('.card__list').insertAdjacentHTML('beforeend', photoCardsTpl(dataArr));
}
