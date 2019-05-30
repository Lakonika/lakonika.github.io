"use strict";

var navMain = document.querySelector('.main-nav');
var navTab = navMain.getElementsByClassName('main-nav__tab');
var navMenu = navMain.getElementsByClassName('main-nav__menu');
var offer = document.querySelector('.offer');
var offerItem = offer.getElementsByClassName('offer__item');
var offerMenu = offer.getElementsByClassName('offer__article');
var news = document.querySelector('.news');
var newsTab = news.getElementsByClassName('news__tab');
var newsContent = news.getElementsByClassName('news__content');

var deactivateItem = function (element) {
    Array.from(element).forEach(function (item) {
        item.classList.add('hidden');
    });
};

var activateItem = function (element) {
  element.classList.remove('hidden');
};

var deactivateTab = function () {
  var tabActive = navMain.querySelector('.active');
  if (tabActive) {
    tabActive.classList.remove('active');
    deactivateItem(navMenu);
  }
};

var deactivateSlide = function () {
  var linkActive = slider.querySelector('.active');
  if (linkActive) {
    linkActive.classList.remove('active');
    deactivateItem(slideItem);
  }
};

var deactivateOffer = function () {
  var offerActive = offer.querySelector('.active');
  if (offerActive) {
    offerActive.classList.remove('active');
    deactivateItem(offerMenu);
  }
};

var deactivateNews = function () {
  var newsLinkActive = news.querySelector('.active');
  if (newsLinkActive) {
    newsLinkActive.classList.remove('active');
    deactivateItem(newsContent);
  }
};

var onTabClick = function(evt) {
  Array.from(navTab).forEach(function(item) {
    item.addEventListener('click', function(evt) {
      evt.preventDefault();
      deactivateTab();
      item.classList.add('active');
      var itemActive = navMain.querySelector(item.firstChild.hash);
      activateItem(itemActive);
    });
  });
};

var onOfferClick = function(evt) {
  Array.from(offerItem).forEach(function(item) {
    item.addEventListener('click', function(evt) {
      evt.preventDefault();
      deactivateOffer();
      item.classList.add('active');
      var itemActive = offer.querySelector(item.firstChild.hash);
      activateItem(itemActive);
    });
  });
};

var onNewsClick = function(evt) {
  Array.from(newsTab).forEach(function(item) {
    item.addEventListener('click', function(evt) {
      evt.preventDefault();
      deactivateNews();
      item.classList.add('active');
      var itemActive = news.querySelector(item.firstChild.hash);
      activateItem(itemActive);
    });
  });
};

onTabClick();
onOfferClick();
onNewsClick();
