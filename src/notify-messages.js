import Notify from 'simple-notify';

const TIME_MSG_CLOSE = 2000;

function onEmptyField() {
  return new Notify({
    status: 'warning',
    title: 'Please',
    text: 'Enter country name',
    autoclose: true,
    autotimeout: TIME_MSG_CLOSE,
  });
}

function onFindCountry() {
  return new Notify({
    status: 'success',
    title: 'Well done!',
    text: 'We found the country according to your request',
    autoclose: true,
    autotimeout: TIME_MSG_CLOSE,
  });
}

function onError() {
  return new Notify({
    status: 'error',
    title: 'Oops...',
    text: 'There is no country with that name',
    autoclose: true,
    autotimeout: TIME_MSG_CLOSE,
  });
}

function onManyMatches() {
  return new Notify({
    status: 'warning',
    title: 'Too many matches found',
    text: 'Please enter a more specific name.',
    autoclose: true,
    autotimeout: TIME_MSG_CLOSE,
  });
}
function onFetchError() {
  return new Notify({
    status: 'error',
    title: 'Connection error!',
    text: 'Check network connection',
    autoclose: false,
    autotimeout: TIME_MSG_CLOSE,
  });
}

export default {
  onEmptyField,
  onError,
  onManyMatches,
  onFetchError,
  onFindCountry,
};
