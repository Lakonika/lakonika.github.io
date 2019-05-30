"use strict";

var navMain = document.querySelector('.main-nav');
var navToggle = navMain.querySelector('.main-nav__toggle');

var openMenu = function () {
  if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
  } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
  }
};

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', openMenu);
