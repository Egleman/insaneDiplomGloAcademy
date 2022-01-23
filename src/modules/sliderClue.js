
const sliderClue = () => {
 const clue = document.querySelector('.formula-item__icon');
 const swiper = new Swiper('.formula-slider', {
    // Optional parameters
    //loop: true,
  
    // Navigation arrows
    centeredSlides: true,
    spaceBetween: 30,
    //autoHeight: true,
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: '.slider-arrow_right-formula',
      prevEl: '.slider-arrow_left-formula',
    },
  });
  window.addEventListener('resize', () => {
    if(window.screen.width < 1024) {
      setInterval(() => {
        let formula = document.querySelector('.formula-slider');
        let slides = formula.querySelectorAll('.swiper-slide');
        slides.forEach(slide => {
          if(slide.classList.contains('swiper-slide-active')) {
            slide.querySelector('.formula-item').classList.add('active-item');
          } else {
            slide.querySelector('.formula-item').classList.remove('active-item');
          }
        });
      }, 100);
    }
  });

  
};

export default sliderClue;