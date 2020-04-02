'use strict';

var linkHead = document.querySelector('.services__head');
var menu = document.querySelector('.services__menu');
var items = menu.querySelectorAll('.services__submenu-item');

linkHead.addEventListener('click', function () {
    console.log(menu);
    menu.classList.toggle('services__menu_opened');
});

