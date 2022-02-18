const eventsSwiper = new Swiper('.events__swiper', {

  loop: false,
  autoHeight: false,
  slidesPerView: 1,
  spaceBetween: 22,
  grid: {
    rows: 1,
    fill: "column"
  },

  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
  },

  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },

  breakpoints: {
    641: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },
    900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
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
