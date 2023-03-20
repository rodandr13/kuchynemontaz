let popupSendRequest = document.querySelector('.popup_type_send-request');
let closeButtons = document.querySelectorAll('.popup__close-button');

const popupList = document.querySelectorAll('.popup');
const popupFormButton = document.querySelectorAll('.button_style_contact');
const questionElements = document.querySelectorAll('.question');
const popupImage = document.querySelector('.popup_type_image');
const certificateElements = document.querySelectorAll('.certificates__link');
const workElements = document.querySelectorAll('.work');


const openImagePopup = (src) => {
  popupImage.querySelector('.popup__image').src = src;
  popupImage.classList.add('popup_opened');
}

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
  question.addEventListener('click', (evt) => {
    question.querySelector('.question__answer').classList.toggle('question__answer_opened');
    question.querySelector('.question__toggle-icon').classList.toggle('question__toggle-icon_opened');
  });
});

const handlerKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function openPopup(popup) {
  document.addEventListener('keydown', handlerKeyDown);
  popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
  document.removeEventListener('keydown', handlerKeyDown);
  popup.classList.remove('popup_opened');
}

const openPopupAddCard = () => {
  popupSendRequest.querySelector('form').reset();
  openPopup(popupSendRequest);
}

const closePopupOverlayClick = (evt) => {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

popupFormButton.forEach(function (button) {
  button.addEventListener('click', openPopupAddCard);
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
