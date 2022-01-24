const transparency = () => {
    const transparency = document.querySelector('.transparency');
    const modalTransparency = document.querySelector('.popup-transparency');

    transparency.addEventListener('click', (e) => {
        if (e.target.closest('.transparency-item__img')) {
            modalTransparency.style.visibility = 'visible';
        }
    });

    const swiper = new Swiper('.popup-transparency-slider', {
        // Optional parameters
        //loop: true,
      
        // Navigation arrows
        //centeredSlides: true,
        //spaceBetween: 30,
        //autoHeight: true,
        //slidesPerView: 3,
        //loop: true,
        navigation: {
          nextEl: '#transparency_right',
          prevEl: '#transparency_left',
        },
        pagination: {
            el: '.transparency-swiper-counter',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    '<span class="' + totalClass + '"></span>';
            } 
        },
    });
    const swiperTrans = new Swiper('.transparency-slider', {
        centeredSlides: true,
        slidesPerView: 1,
        init: false,
        navigation: {
            nextEl: '#transparency-arrow_right',
            prevEl: '#transparency-arrow_left',
          },
    });

    if(window.screen.width < 1091) {
        swiperTrans.init();
    }

    window.addEventListener('resize', () => {
        if(window.screen.width < 1091) {
            swiperTrans.init();
        }// else if (window.screen.width > 1025) {
           // swiperTabs.destroy();
        //}
    });
};

export default transparency;