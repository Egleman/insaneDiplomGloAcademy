const menu = () => {
    const popupDialogMenu = document.querySelector('.popup-dialog-menu');
    const popUp = document.querySelector('.popup-repair-types');
    const popUpPrivacy = document.querySelector('.popup-privacy');
    const modalPortfolio = document.querySelector('.popup-portfolio');
    const modalTransparency = document.querySelector('.popup-transparency');
    const popUpConsult = document.querySelector('.popup-consultation');

    const handlemenu = () => {
        popupDialogMenu.classList.toggle('active-menu');
    };

    window.addEventListener('click', (e) => {
        if (e.target.closest('.menu__title') || e.target.closest('.menu__icon')) {
            handlemenu();
        } else if (e.target.closest('.close-menu')) {
            handlemenu();
        } else if (e.target.closest('a[href*="#"]') && popupDialogMenu.contains(e.target)) {
            if (!e.target.closest('.no-overflow')) {
                e.preventDefault();
                const blockId = e.target.getAttribute('href');
                document.querySelector(blockId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                handlemenu();
            } else {
                e.preventDefault();
                popUp.style.visibility = 'visible';
                handlemenu();
            }
        } else if (e.target.closest('.button-footer')) {
            e.preventDefault();
            const blockId = e.target.getAttribute('href');
            document.querySelector(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else if (e.target.closest('.fullPrice-btn')) {
            popUp.style.visibility = 'visible';
        } else if (e.target.closest('.close')) {
            popUp.style.visibility = 'hidden';
            popUpPrivacy.style.visibility = 'hidden';
            modalPortfolio.style.visibility = 'hidden';
            modalTransparency.style.visibility = 'hidden';
            popUpConsult.style.visibility = 'hidden';
            document.querySelector('.popup-thank').style.visibility = 'hidden';
        } else if (e.target.closest('.close-btn-Fullprice-mobile')) {
            popUp.style.visibility = 'hidden';
        }
    });

};

export default menu;