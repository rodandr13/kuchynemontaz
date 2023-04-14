const validationOptions = {
  popupFormSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
}

const showInputError = (inputElement, errorMessage, options) => {
  const errorElement = document.querySelector(`.${inputElement.name}-error`);
  errorElement.classList.add(options.errorClass);
  inputElement.classList.add(options.inputErrorClass);
  errorElement.textContent = errorMessage;
}

const hideInputError = (inputElement, options) => {
  const errorElement = document.querySelector(`.${inputElement.name}-error`);
  errorElement.classList.remove(options.errorClass);
  inputElement.classList.remove(options.inputErrorClass);
}


const checkInputValidity = (inputElement, options) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage, options);
  } else {
    hideInputError(inputElement, options);
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

const toggleButtonState = (inputList, buttonElement, options) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(options.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(options.inactiveButtonClass)
    buttonElement.disabled = '';
  }
}

const setEventListener = (formElement, options) => {
  const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
  const buttonElement = formElement.querySelector(options.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, options);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement, options);
      toggleButtonState(inputList, buttonElement, options);
    })
  })
}

const enableValidation = (options) => {
  const formList = Array.from(document.querySelectorAll(options.popupFormSelector));
  formList.forEach((formElement) => {
    setEventListener(formElement, options);
  })
}

enableValidation(validationOptions);
