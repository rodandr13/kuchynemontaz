import '../pages/index.css';

const popupSendRequest = document.querySelector('.popup_type_send-request');
const closeButtons = document.querySelectorAll('.popup__close-button');

const popupList = document.querySelectorAll('.popup');
const popupFormButton = document.querySelectorAll('.button_type_request');
const questionElements = document.querySelectorAll('.question');
const popupImage = document.querySelector('.popup_type_image');
const certificateElements = document.querySelectorAll('.certificates__link');
const workElements = document.querySelectorAll('.work');
const optionButtonsList = document.querySelectorAll('.option__button');

const formSendRequest = document.querySelector('.form_type_send-request');

const handleSendRequest = (evt) => {
  evt.preventDefault();
  closePopup(popupSendRequest);
}

formSendRequest.addEventListener('submit', handleSendRequest);

const openImagePopup = (src) => {
  document.addEventListener('keydown', handleKeyDown);
  popupImage.querySelector('.popup__image').src = src;
  popupImage.classList.add('popup_opened');
}

const handleKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

const openPopup = (popup) => {
  document.addEventListener('keydown', handleKeyDown);
  popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
  document.removeEventListener('keydown', handleKeyDown);
  popup.classList.remove('popup_opened');
}

const openPopupSendRequest = () => {
  popupSendRequest.querySelector('form').reset();
  openPopup(popupSendRequest);
}

const closePopupOverlayClick = (evt) => {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

const openPopupOption = (evt) => {
  const data = evt.target.getAttribute('data-stage');
  openImagePopup(`./images/options/price-${data}.jpg`);
}

optionButtonsList.forEach((button) => {
  button.addEventListener('click', openPopupOption);
})

workElements.forEach((work) => {
  work.addEventListener('click', (evt) => {
    const srcImage = evt.currentTarget.querySelector('.work__image').src;
    openImagePopup(srcImage);
  })
})

certificateElements.forEach((certificate) => {
  certificate.addEventListener('click', (evt) => {
    evt.preventDefault();
    const srcImage = evt.currentTarget.querySelector('.certificates__image').src;
    openImagePopup(srcImage);
  })
});

questionElements.forEach((question) => {
  question.addEventListener('click', () => {
    question.querySelector('.question__answer').classList.toggle('question__answer_opened');
    question.querySelector('.question__toggle-icon').classList.toggle('question__toggle-icon_opened');
  });
});

popupFormButton.forEach(function (button) {
  button.addEventListener('click', openPopupSendRequest);
})
closeButtons.forEach((button) => {
  const popup = button.closest('.popup')
  button.addEventListener('click', () => {
    closePopup(popup);
  })
});
popupList.forEach((popup) => {
  popup.addEventListener('click', closePopupOverlayClick);
});
