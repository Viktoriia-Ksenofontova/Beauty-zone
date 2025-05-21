const swiper = new Swiper('.swiper-container', {
  autoHeight: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },

  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1280: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__item',
    bulletActiveClass: 'pagination__item--active',
  },

  navigation: {
    nextEl: '.arrow-button--next',
    prevEl: '.arrow-button--prev',
  },
});
