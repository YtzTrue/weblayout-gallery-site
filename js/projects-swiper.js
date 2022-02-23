const projectsSwiper = new Swiper('.projects__slider', {

  loop: false,
  autoHeight: false,
  slidesPerView: 1,
  spaceBetween: 22,
  grid: {
    rows: 1,
    fill: "column"
  },

  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },

  breakpoints: {
    441: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: true,

});
