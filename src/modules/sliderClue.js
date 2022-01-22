

const sliderClue = () => {
 const clue = document.querySelector('.formula-item__icon');
 const swiper = new Swiper('.swiper', {
    // Optional parameters
    //loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-arrow_right-formula',
      prevEl: '.slider-arrow_left-formula',
    },
  });
};

export default sliderClue;