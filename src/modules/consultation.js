const consult = () => {
    const consultBtn = document.querySelectorAll('.button_wide');
    const popUpConsult = document.querySelector('.popup-consultation');

    consultBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            popUpConsult.style.visibility = 'visible';
        });
    });
};

export default consult;