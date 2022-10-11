import throttle from 'lodash.throttle';
const inputRef = document.querySelector('.feedback-form');

inputRef.addEventListener('input', onFormInput);
inputRef.addEventListener('submit', onSubmitForm);

const USER_TEMP_DATA = 'feedback-form-state';

let userData = {};

function onFormInput(evt) {
  userData[evt.target.name] = evt.target.value;
  const userDataStringify = JSON.stringify(userData);
  localStorage.setItem(USER_TEMP_DATA, userDataStringify);
}

userSavedDataOutput();

function userSavedDataOutput() {
  const savedUserData = JSON.parse(localStorage.getItem(USER_TEMP_DATA));

  if (savedUserData) {
    userData = savedUserData;
    inputRef.email.value = savedUserData.email;
    inputRef.message.value = savedUserData.message;
  }
}

function onSubmitForm(evt) {
  if (!inputRef.email.value || !inputRef.message.value) {
    alert('Please, enter data in all fields');
    return;
  }
  evt.preventDefault();

  evt.currentTarget.reset();

  console.log(userData);
  userData = {};
  localStorage.removeItem(USER_TEMP_DATA);
}

// function onFormInput() {
//   const userData = {
//     email: inputRef.email.value,
//     message: inputRef.message.value,
//   };

// inputRef.addEventListener('input', throttle(onFormInput, 500));
// inputRef.addEventListener('submit', onSubmitForm);

// const USER_TEMP_DATA = 'feedback-form-state';

// userSavedDataOutput();

// function onFormInput() {
//   const userData = {
//     email: inputRef.email.value,
//     message: inputRef.message.value,
//   };

//   const userDataStringify = JSON.stringify(userData);
//   localStorage.setItem(USER_TEMP_DATA, userDataStringify);
// }

// function userSavedDataOutput() {
//   const savedUserData = JSON.parse(localStorage.getItem(USER_TEMP_DATA));
//   if (savedUserData) {
//     inputRef.email.value = savedUserData.email;
//     inputRef.message.value = savedUserData.message;
//   }
// }

// function onSubmitForm(evt) {
//   if (!inputRef.email.value || !inputRef.message.value) {
//     alert('Please, enter data in all fields');
//     return;
//   }
//   evt.preventDefault();

//   evt.currentTarget.reset();
//   console.log(JSON.parse(localStorage.getItem(USER_TEMP_DATA)));
//   localStorage.removeItem(USER_TEMP_DATA);
// }
