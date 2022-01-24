const portfolioSlider = () => {
    const portfolioSwiper = new Swiper('.portfolio-slider-desktop', {
        // Optional parameters
        //loop: true,
      
        // Navigation arrows
        //centeredSlides: true,
        //spaceBetween: 30,
        //autoHeight: true,
        //slidesPerView: 3,
        //loop: true,
        breakpoints: {
            // when window width is >= 320px
            576: {
              slidesPerView: 1
            },
            // when window width is >= 876px
            876: {
              slidesPerView: 2
            },
            // when window width is >= 1050px
            1050: {
              slidesPerView: 3
            }
        },
        navigation: {
          nextEl: '#portfolio-arrow_right',
          prevEl: '#portfolio-arrow_left',
        },
    });
    let right = document.querySelector('.slider-arrow_right-portfolio');
    let left = document.querySelector('.slider-arrow_left-portfolio');
    right.addEventListener('click', () => {
        if (window.screen.width < 1050  && window.screen.width > 876) {
            if (portfolioSwiper.realIndex == 3) {
                left.style.display = 'flex';
                right.style.display = 'none';
            }
        } else if (window.screen.width < 876 && window.screen.width > 576) {
            if (portfolioSwiper.realIndex == 4) {
                left.style.display = 'flex';
                right.style.display = 'none';
            }
        } else {
            if (portfolioSwiper.realIndex == 2) {
                left.style.display = 'flex';
                right.style.display = 'none';
            }
        }
        
    });
    left.addEventListener('click', () => {
        if (portfolioSwiper.realIndex == 0) {
            left.style.display = 'none';
            right.style.display = 'flex';
        }
    });
};

export default portfolioSlider;