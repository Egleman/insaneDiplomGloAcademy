const linkPrivacy = () => {
    const linkPrivacy = document.querySelectorAll('.link-privacy');
    const popUpPrivacy = document.querySelector('.popup-privacy');

    linkPrivacy.forEach(link => {
        link.addEventListener('click', () => {
            popUpPrivacy.style.visibility = 'visible';
        });
    });
};

export default linkPrivacy;