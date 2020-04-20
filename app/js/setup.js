'use strict';

var input = document.querySelector('.slider > input');
input.setAttribute('checked', true);

var popup = document.querySelector('.popup');

var burger = document.querySelector('.nav__item_burger');
burger.addEventListener('click', function () {
  popup.classList.add('popup_opened');
});

var closePopup = document.querySelector('.logo__close');
closePopup.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});
