var swiperCategories = new Swiper(".categories__container", {
    spaceBetween: 24,
    loop:false,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1000: {
          slidesPerView: 2.5,
          spaceBetween: 24,
        },
      },
  });