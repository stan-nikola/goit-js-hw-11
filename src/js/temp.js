formElements.forEach(element => {
  if (element.name && userDataKey === element.name) {
    console.log(element.name);
  }
});
// inputRef.email.value = savedUserData.email;
// inputRef.message.value = savedUserData.message;
if (!element) {
  alert('Please, enter data in all fields');
  return;
}
formElements.forEach(el => {
  console.log(!el);
});

formElements.some(function (el) {
  alert('Please, enter data in all fields');
  return el.name && !el.value;
});
