const slider = () => {
    const swiper = new Swiper('.reviews-slider', {
        // Optional parameters
        //loop: true,
      
        // Navigation arrows
        //centeredSlides: true,
        //spaceBetween: 30,
        //autoHeight: true,
        //slidesPerView: 3,
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: '#reviews-arrow_right',
          prevEl: '#reviews-arrow_left',
        },
      });
};

export default slider;