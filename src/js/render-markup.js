import photoCardsTpl from '../templates/photo-cards.hbs';

export default function renderMarkup(dataArr) {
  console.log(dataArr);
  console.log(photoCardsTpl(dataArr));

  getRefs('.container').innerHTML = photoCardsTpl(dataArr);
}
