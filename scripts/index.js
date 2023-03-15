let popup = document.querySelector('.popup');
let popupCloseBtn = document.querySelector('.popup__close-button');
let contactFormBtn = document.querySelectorAll('.button');

const langSwitcher = document.querySelector('.lang-switcher');

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

