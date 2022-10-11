import throttle from 'lodash.throttle';
const inputRef = document.querySelector('.feedback-form');

const ageRef = document.querySelector('.js-age');

inputRef.addEventListener('input', throttle(onFormInput), 500);
inputRef.addEventListener('submit', onSubmitForm);

const USER_TEMP_DATA = 'feedback-form-state';

let userData = {};
let formElements = Array.from(inputRef.elements);
ageRef.textContent = 'Choose your age';

function onFormInput(evt) {
  userData[evt.target.name] = evt.target.value;

  const userDataStringify = JSON.stringify(userData);
  localStorage.setItem(USER_TEMP_DATA, userDataStringify);
  if (userData.age) {
    ageRef.textContent = `${userData.age} years old`;
  }
}

userSavedDataOutput();

function userSavedDataOutput() {
  const savedUserData = JSON.parse(localStorage.getItem(USER_TEMP_DATA));

  if (savedUserData) {
    userData = savedUserData;

    const userDataKey = Object.keys(userData);
    userDataKey.map(key => {
      formElements.map(element => {
        if (element.name === key) {
          element.value = userData[key];
        }
      });
    });
    if (userData.age) {
      ageRef.textContent = `${userData.age} years old`;
    }
  }
}

function onSubmitForm(evt) {
  evt.preventDefault();

  for (const el of formElements) {
    if (el.name && !el.value) {
      alert('Please, enter data in all fields');

      return;
    }
  }
  evt.currentTarget.reset();
  ageRef.textContent = 'Thanks';
  setTimeout(() => {
    ageRef.textContent = 'Choose your age';
  }, 1000);

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
