import photoCardsTpl from '../templates/photo-cards.hbs';
import getRef from './get-ref';

export default function renderMarkup(dataArr) {
  // console.log(dataArr);
  // console.log(photoCardsTpl(dataArr));

  getRef('.container').innerHTML = photoCardsTpl(dataArr);
}
