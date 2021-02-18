'use strict';

let menuActive = document.querySelector('.menu-active');
let headerMenu = document.querySelector('.user-list__item-menu');
let menuClose = document.querySelector('.menu-close');

function toggleMenu() {
    menuActive.classList.toggle('hidden');
}

headerMenu.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
