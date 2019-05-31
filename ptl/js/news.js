"use strict";

(function() {
  var swiper = new Swiper('.news__wrapper', {
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
        1150: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        779: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
  });
})();
