const table = () => {
    const tabPanel = document.querySelector('.nav-list-popup-repair');
    const tabContent = document.querySelectorAll('.popup-repair-types-content-table__list');
    const tabList = document.querySelectorAll('.popup-repair-types-nav__item');

    tabPanel.addEventListener('click', (e) => {
        if (e.target.closest('.popup-repair-types-nav__item')) {
            const tabBtn = e.target.closest('.popup-repair-types-nav__item');
            const tabText = tabBtn.textContent;
            tabList.forEach((tab, index) => {
                if (tab == tabBtn) {
                    tabContent[index].style.display = 'flex';
                    fetch('../db/db.json')
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        data.forEach(item => {
                            if(item.type == tabText) {
                                //console.log(item);
                                const tr = document.createElement('tr');
                                tr.className = 'mobile-row';
                                tr.innerHTML = `
                                    <td class="repair-types-name">${item.name}</td>
									<td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
									<td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
									<td class="repair-types-value">${item.units}</td>
									<td class="repair-types-value">${item.cost} руб.</td>
                                `;
                                tabContent[index].querySelector('tbody').append(tr);
                            }
                        });
                    });
                } else {
                    tabContent[index].style.display = 'none';
                    tabContent[index].querySelector('tbody').textContent = '';
                }
            });
        }
    });

    


};

export default table;