
const heroSwiper = new Swiper(".hero__swiper", {
  spaceBetween: 30,
  effect: "fade",
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
});

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
