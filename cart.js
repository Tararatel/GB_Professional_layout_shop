let menuActiveCatalog = document.querySelector('.menu-active-catalog');
let headerMenu = document.querySelector('.user-list__item-menu');
let menuClose = document.querySelector('.menu-close');

function toggleMenu() {
    menuActiveCatalog.classList.toggle('hidden');
}

headerMenu.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);