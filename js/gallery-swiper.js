const gallerySwiper = new Swiper('.gallery__swiper', {

  loop: false,
  autoHeight: false,
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 30,

  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },

  breakpoints: {
    641: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: true,

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }

});
