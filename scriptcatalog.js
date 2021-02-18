// Скрипт работы меню

let menuActiveCatalog = document.querySelector('.menu-active-catalog');
let headerMenu = document.querySelector('.user-list__item-menu');
let menuClose = document.querySelector('.menu-close');

function toggleMenu() {
    menuActiveCatalog.classList.toggle('hidden');
}

headerMenu.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);

// Скрипт работы меню фильтров

let filterMenu = document.querySelector('.items__filter-menu-active');
let filterButton = document.querySelector('.items__filter-menu-icon');

function toggleFilter() {
    filterMenu.classList.toggle('hidden');
}

filterButton.addEventListener('click', toggleFilter);

// Скрипт смены цвета при открытии меню фильтра

$(function() {
    $('.items__filter-menu-noactive').on('click', function() {
        $(this).toggleClass('items__filter-menu-noactive--active');
    })

    $('.noactive-mobile').on('click', function() {
        $(this).toggleClass('noactive-mobile--active');
    })
})

