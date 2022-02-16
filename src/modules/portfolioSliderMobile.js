const mobilePortfolio = () => {
    const swiperMobile = new Swiper('.portfolio-slider-mobile', {
        navigation: {
            nextEl: '#portfolio-arrow-mobile_right',
            prevEl: '#portfolio-arrow-mobile_left',
        },
        pagination: {
            el: '.portfolio-slider-counter',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    '<span class="' + totalClass + '"></span>';
            } 
        },
    });
};

export default mobilePortfolio;