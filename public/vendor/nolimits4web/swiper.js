/**
 * This Plugin handles the swiper functionality for the swiperJS Plugin from swiperjs.com
 */
export default class SwiperPlugin {
    constructor(el) {
        const swiper = new Swiper(el, {
            // Optional parameters
            direction: 'horizontal',
            loop: false,

            breakpoints: {
                // when window width is >= 0
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 992px
                992: {
                  slidesPerView: 3,
                  spaceBetween: 120,
                },
            },

            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },

            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        });
    }
}
