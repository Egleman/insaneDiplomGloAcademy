const repairSlider = () => {
    const swiper = new Swiper('.types-repair-slider-swiper', {
        // Optional parameters
        //loop: true,
      
        // Navigation arrows
        //centeredSlides: true,
        //spaceBetween: 30,
        //autoHeight: true,
        //slidesPerView: 3,
        //loop: true,
        navigation: {
          nextEl: '.repair-arrow-right',
          prevEl: '.repair-arrow-left',
        },
        pagination: {
            el: '.repair-slider-counter',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    '<span class="' + totalClass + '"></span>';
            } 
        },
    });

        const swiperTabs = new Swiper('.repair-types-nav', {
            centeredSlides: true,
            slidesPerView: 1,
            init: false,
            navigation: {
                nextEl: '.tabs-right',
                prevEl: '.tabs-left',
              },
        });
    
    if(window.screen.width < 1025) {
        swiperTabs.init();
    }

    window.addEventListener('resize', () => {
        if(window.screen.width < 1025) {
            swiperTabs.init();
        } else if (window.screen.width > 1025) {
            swiperTabs.destroy();
        }
    });

    setTimeout(() => {
        //swiperTabs.init();
    }, 5000);


};

export default repairSlider;