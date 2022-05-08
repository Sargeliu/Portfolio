const hamburger = document.querySelector('.hamburger__toggle'),
      menu = document.querySelector('.main-nav'),
      closeElem = document.querySelector('.main-nav--closed');

hamburger.addEventListener('click', () => {
    menu.classList.add('main-nav--opened');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('main-nav--opened');
});
