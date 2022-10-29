import photoCardsTpl from '../templates/photo-cards.hbs';
import getRefs from './get-refs';

export default function renderMarkup(dataArr) {
  console.log(dataArr);
  console.log(photoCardsTpl(dataArr));

  getRefs('.container').innerHTML = photoCardsTpl(dataArr);
}
