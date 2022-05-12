let hamburger = document.querySelector('.hamburger__toggle');
let menu = document.querySelector('.main-nav');
let closeElem = document.querySelector('.main-nav__toggle');
let about = document.querySelector('.site-list__link--about');
let resume = document.querySelector('.site-list__link--resume');
let skills = document.querySelector('.site-list__link--skills');
let portfolio = document.querySelector('.site-list__link--portfolio');
let price = document.querySelector('.site-list__link--price');
let contacts = document.querySelector('.site-list__link--contacts');


hamburger.onclick = function() {
  menu.classList.toggle('main-nav--closed');
  menu.classList.toggle('main-nav--opened');
}

closeElem.onclick = function() {
  menu.classList.toggle('main-nav--closed');
  menu.classList.toggle('main-nav--opened');
}

about.onclick = function() {
  menu.classList.remove('main-nav--opened');
  menu.classList.add('main-nav--closed');
}

resume.onclick = function() {
  menu.classList.remove('main-nav--opened');
  menu.classList.add('main-nav--closed');
}

skills.onclick = function() {
  menu.classList.remove('main-nav--opened');
  menu.classList.add('main-nav--closed');
}

portfolio.onclick = function() {
  menu.classList.remove('main-nav--opened');
  menu.classList.add('main-nav--closed');
}

price.onclick = function() {
  menu.classList.remove('main-nav--opened');
  menu.classList.add('main-nav--closed');
}

contacts.onclick = function() {
  menu.classList.remove('main-nav--opened');
  menu.classList.add('main-nav--closed');
}
