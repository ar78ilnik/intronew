'use strict';
var popup = document.querySelector('.popup');

var burger = document.querySelector('.nav__burger');
burger.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

var closePopup = document.querySelector('.logo__close');
closePopup.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});
