const modal = () => {
    const portfolio = document.querySelector('.portfolio');
    const modalPortfolio = document.querySelector('.popup-portfolio');
    const modalPortfolioText = document.querySelectorAll('.popup-portfolio-text');
    const left = document.querySelector('#popup_portfolio_left');
    const right = document.querySelector('#popup_portfolio_right');

    portfolio.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.closest('.portfolio-slider__slide-frame')) {
            modalPortfolio.style.visibility = 'visible';
        }
    });

    const swiper = new Swiper('.popup-portfolio-slider', {
        // Optional parameters
        //loop: true,
      
        // Navigation arrows
        //centeredSlides: true,
        //spaceBetween: 30,
        //autoHeight: true,
        //slidesPerView: 3,
        //loop: true,
        navigation: {
          nextEl: '#popup_portfolio_right',
          prevEl: '#popup_portfolio_left',
        },
        pagination: {
            el: '.popUp-swiper-counter',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    '<span class="' + totalClass + '"></span>';
            } 
        },
    });
    modalPortfolioText[0].style.display = 'flex';
    right.addEventListener('click', () => {
        modalPortfolioText[swiper.realIndex].style.display = 'flex';
        if (swiper.realIndex != 0) {
            modalPortfolioText[swiper.realIndex - 1].style.display = 'none';
        }
    });
    left.addEventListener('click', () => {
        modalPortfolioText[swiper.realIndex].style.display = 'flex';
        if (swiper.realIndex != 10) {
            modalPortfolioText[swiper.realIndex + 1].style.display = 'none';
        }
    });
};

export default modal;