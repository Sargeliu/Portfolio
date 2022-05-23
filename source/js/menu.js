var hamburger = document.querySelector('.hamburger__toggle');
var menu = document.querySelector('.main-nav');
var closeElem = document.querySelector('.main-nav__toggle');
var about = document.querySelector('.site-list__link--about');
var resume = document.querySelector('.site-list__link--resume');
var skills = document.querySelector('.site-list__link--skills');
var portfolio = document.querySelector('.site-list__link--portfolio');
var price = document.querySelector('.site-list__link--price');
var contacts = document.querySelector('.site-list__link--contacts');


hamburger.onclick = function() {
  menu.classList.toggle('main-nav--closed');
  menu.classList.toggle('main-nav--opened');
};

closeElem.onclick = function() {
  menu.classList.toggle('main-nav--closed');
  menu.classList.toggle('main-nav--opened');
};

about.onclick = function() {
  menu.classList.remove('main-nav--opened');
  menu.classList.add('main-nav--closed');
};

resume.onclick = function() {
  menu.classList.remove('main-nav--opened');
  menu.classList.add('main-nav--closed');
};

skills.onclick = function() {
  menu.classList.remove('main-nav--opened');
  menu.classList.add('main-nav--closed');
};

portfolio.onclick = function() {
  menu.classList.remove('main-nav--opened');
  menu.classList.add('main-nav--closed');
};

price.onclick = function() {
  menu.classList.remove('main-nav--opened');
  menu.classList.add('main-nav--closed');
};

contacts.onclick = function() {
  menu.classList.remove('main-nav--opened');
  menu.classList.add('main-nav--closed');
};
