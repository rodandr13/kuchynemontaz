let popupSendRequest = document.querySelector('.popup_type_send-request');
let closeButtons = document.querySelectorAll('.popup__close-button');
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

function popupOpen() {
  popupSendRequest.classList.add('popup_opened');
}

const popupClose = (popup) => popup.classList.remove('popup_opened');

popupFormButton.forEach(function (button) {
  button.addEventListener('click', popupOpen);
})
closeButtons.forEach((button) => {
  const popup = button.closest('.popup')
  button.addEventListener('click', () => {
    popupClose(popup);
  })
});

