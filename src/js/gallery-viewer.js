import SimpleLightbox from 'simplelightbox';

export default function galleryViewer() {
  new SimpleLightbox('.card__list a', {
    captionsData: 'data',
    captionDelay: 250,
    alertErrorMessage:
      'Изображение не найдено, будет загружено следующее изображение',
    disableRightClick: true,
  });
}
