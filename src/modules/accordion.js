const accordion = () => {
    const accordion = document.querySelector('.accordion');
    const lists = accordion.querySelectorAll('h2');
    
    accordion.addEventListener('click', (e) => {
        if (e.target.closest('.title_block')) {
            debugger;
            const tab = e.target.closest('.title_block');
            lists.forEach(list => {
                if (list == tab) {
                    list.classList.add('msg-active');
                } else {
                    list.classList.remove('msg-active');
                }
            });
        }
    });
};

export default accordion;