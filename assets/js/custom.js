(function ($) {
  $('.mean-menu').meanmenu({
    meanScreenWidth: "991"
  });

  'use strict';
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 150) {
      $('.navbar-area').addClass("is-sticky");
    } else {
      $('.navbar-area').removeClass("is-sticky");
    }

  });


})(jQuery);

const swiper = new Swiper('#mySwiper', {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,

  // If we need pagination
  pagination: {
    enabled: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    enabled: false,
  },
});
