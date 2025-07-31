'use strict';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

export function initSlider() {
  const sliderDestinations = new Swiper(".destinations-slider__body", {
    navigation: {
      nextEl: ".destinations-slider__next",
      prevEl: ".destinations-slider__prev" 
    },
    pagination: {
      el: '.destinations-slider__dots',
      type: 'bullets',
      clickable: true,
      dynamicBullets: false,
    },
    autoHeight: true,
    initialSlide: 1,
    on: {
      slideChangeTransitionEnd() {
        this.updateAutoHeight();
      }
    },
    speed: 800,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true 
    },
    breakpoints: {
		320: {
			slidesPerView: 1,
      spaceBetween: 18,
		},
		480: {
			slidesPerView: 2,
      spaceBetween: 26,
		},
		992: {
			slidesPerView: 3,
      spaceBetween: 32,
		}
	},

  });
    const sliderTestimonial = new Swiper(".testimonial-slider__body", {
    navigation: {
      nextEl: ".testimonial-slider__next",
      prevEl: ".testimonial-slider__prev" 
    },
    pagination: {
      el: '.testimonial-slider__dots',
      type: 'bullets',
      clickable: true,
      dynamicBullets: false,
    },
    autoHeight: true,
    initialSlide: 1,
    on: {
      slideChangeTransitionEnd() {
        this.updateAutoHeight();
      }
    },
    speed: 800,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true 
    },
    breakpoints: {
		320: {
			slidesPerView: 1,
      spaceBetween: 18,
		},
		480: {
			slidesPerView: 2,
      spaceBetween: 26,
		},
		992: {
			slidesPerView: 3,
      spaceBetween: 32,
		}
	},

  });
}
