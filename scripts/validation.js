const showInputError = (inputElement, errorMessage) => {
  const errorElement = document.querySelector(`.${inputElement.name}-error`);
  errorElement.classList.add('form__input-error_active');
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
}

const hideInputError = (inputElement) => {
  const errorElement = document.querySelector(`.${inputElement.name}-error`);
  errorElement.classList.remove('form__input-error_active');
  inputElement.classList.remove('form__input_type_error');
}


const checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage);
  } else {
    hideInputError(inputElement);
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form__button_inactive');
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove('form__button_inactive')
    buttonElement.disabled = '';
  }
}

const setEventListener = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__button');
  toggleButtonState(inputList, buttonElement);
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

enableValidation();
