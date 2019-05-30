'use strict';

var ESCAPE_KEY = 'Escape';

var login = document.querySelector('.main-nav__login');
var call = document.querySelectorAll('.offer__order');
var popup = document.querySelector('.login');
var modal = document.querySelector('.call');
var close = popup.querySelector('.login__close');
var hide = modal.querySelector('.call__close');

var onButtonclick = function (item) {
  item.classList.add('show');
};

var onCloseclick = function (item) {
  item.classList.remove('show');
};

login.addEventListener('click', function() {
  onButtonclick(popup);
});

close.addEventListener('click', function() {
  onCloseclick(popup);
});

Array.from(call).forEach(function(item) {
  item.addEventListener('click', function() {
    onButtonclick(modal);
  });
});

hide.addEventListener('click', function() {
  onCloseclick(modal);
});

window.addEventListener('keydown', function(evt) {
  if (evt.key === ESCAPE_KEY) {
    if (popup.classList.contains('show')) {
      popup.classList.remove('show');
    }
    if (modal.classList.contains('show')) {
      modal.classList.remove('show');
    }
  }
});
