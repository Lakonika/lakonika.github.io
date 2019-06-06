"use strict";

(function() {
  var swiper = new Swiper('.slider', {
    slidesPerView: 3,
    spaceBetween: 40,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
       slidesPerView: 1,
       spaceBetween: 20,
    }
  });
})();
