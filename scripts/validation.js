const showInputError = () => {

}

const hideInputError = () => {

}


const checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError();
  } else {
    hideInputError();
  }
}

const toggleButtonState = (inputList, buttonElement) => {

}

const setEventListener = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__button');
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement);
      toggleButtonState(inputList, buttonElement);
    })
  })
}

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    setEventListener(formElement);
  })

}
