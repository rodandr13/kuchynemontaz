let popup = document.querySelector('.popup');
let popupCloseBtn = document.querySelector('.popup__close-button');
let contactFormBtn = document.querySelectorAll('.button');
const questionElements = document.querySelectorAll('.question');
const popupImage = document.querySelector('.popup_type_image');
const certificateElements = document.querySelectorAll('.certificates__link');

const openImagePopup = (src) => {
  popupImage.querySelector('.popup__image').src = src;
  popupImage.classList.add('popup_opened');
}

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
  popup.classList.add('popup_opened');
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

contactFormBtn.forEach(function (btn) {
  btn.addEventListener('click', popupOpen);
})

popupCloseBtn.addEventListener('click', popupClose);

