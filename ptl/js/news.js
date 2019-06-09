"use strict";

(function() {
  var swiper = new Swiper('.news__wrapper', {
    slidesPerView: 3,
    spaceBetween: 20,
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
      }
  });
})();
