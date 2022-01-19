import { animate } from './helpers';

const displayNumber = () => {
    const arrow = document.querySelector('.header-contacts__arrow');
    const acord = document.querySelector('.header-contacts__phone-number-accord');
    const acordNumb = document.querySelector('.opacity');

    arrow.addEventListener('click', (e) => {
        e.preventDefault();
        if (window.getComputedStyle(acordNumb).opacity == '1') {
            acord.style.transform = 'translateY(0px)';
            arrow.style.transform = 'rotate(0deg)';
            animate({
                duration: 100,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                  acordNumb.style.opacity = -progress;
                }
            });
        } else {
            acord.style.transform = 'translateY(25px)';
            arrow.style.transform = 'rotate(180deg)';
            animate({
                duration: 100,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                  acordNumb.style.opacity = progress;
                }
            });
        }
    });
    
};

export default displayNumber;