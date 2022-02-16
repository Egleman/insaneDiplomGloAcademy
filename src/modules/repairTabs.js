const repairTabs = () => {
    const tabPanel = document.querySelector('.repair-types-tab');
    const tabs = document.querySelectorAll('.repair-types-nav__item');

    //const tabPanel = document.querySelector('.service-header');
    const tabContent = document.querySelectorAll('.types-repair-slider-swiper');
    //const tabs = document.querySelectorAll('.service-header-tab');

    tabPanel.addEventListener('click', (e) => {
        if (e.target.closest('.repair-types-nav__item')) {
            const tabBtn = e.target.closest('.repair-types-nav__item');
            tabs.forEach((tab, index) => {
                if (tab === tabBtn) {
                    tab.classList.add('active');
                    tabContent[index].style.display = 'flex';
                } else {
                    tab.classList.remove('active');
                    tabContent[index].style.display = 'none';
                }
            });
        }
    });
};

export default repairTabs;