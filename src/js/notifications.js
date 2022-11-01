import toastr from 'toastr';

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '800',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'slideDown',
  hideMethod: 'slideUp',
};

function notFoundNotify() {
  toastr.warning(
    'There are no images matching your search query. Please try again.',
    'Sorry!'
  );
}
function foundNumberHits(hits, searchQuery) {
  toastr.success(
    `
  We found ${hits} images with ${searchQuery}.`,
    'Hooray!'
  );
}

function serverError() {
  toastr.error('Check network connection', 'Connection error!');
}

export default { notFoundNotify, foundNumberHits, serverError };
