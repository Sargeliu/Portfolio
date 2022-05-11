let hamburger = document.querySelector('.hamburger__toggle');
let menu = document.querySelector('.main-nav');
let closeElem = document.querySelector('.main-nav__toggle');

hamburger.addEventListener('click', () => {
    menu.classList.add('main-nav--opened');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('main-nav--opened');
});
