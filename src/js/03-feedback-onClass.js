import throttle from 'lodash.throttle';

const inputRef = document.querySelector('.feedback-form');
const USER_TEMP_DATA = 'feedback-form-state';

class formDataSave {
  constructor() {
    this.userData = {};
    this.userSavedDataOutput();
  }
  onFormInput(evt) {
    this.userData[evt.target.name] = evt.target.value;
    const userDataStringify = JSON.stringify(this.userData);
    localStorage.setItem(USER_TEMP_DATA, userDataStringify);
  }
  userSavedDataOutput() {
    const savedUserData = JSON.parse(localStorage.getItem(USER_TEMP_DATA));

    if (savedUserData) {
      this.userData = savedUserData;

      inputRef.email.value = savedUserData.email;
      inputRef.message.value = savedUserData.message;
    }
  }
  onSubmitForm(evt) {
    evt.preventDefault();
    if (!inputRef.email.value || !inputRef.message.value) {
      alert('Please, enter data in all fields');
      return;
    }

    evt.currentTarget.reset();

    console.log(this.userData);
    this.userData = {};
    localStorage.removeItem(USER_TEMP_DATA);
  }
}
const userExperienceForm = new formDataSave();
inputRef.addEventListener(
  'input',
  throttle(userExperienceForm.onFormInput.bind(userExperienceForm), 500)
);
inputRef.addEventListener(
  'submit',
  userExperienceForm.onSubmitForm.bind(userExperienceForm)
);
