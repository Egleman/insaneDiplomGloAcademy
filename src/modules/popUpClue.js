const clue = () => {
    const formulaItemIconInnerText = document.querySelectorAll('.formula-item__icon-inner-text');

    const addClue = (elem) => {
        let item = elem.closest('.formula-item');
        item.querySelector('.formula-item-popup').classList.add('formula-item-active');
    };
    const removeClue = (elem) => {
        let item = elem.closest('.formula-item');
        item.querySelector('.formula-item-popup').classList.remove('formula-item-active');
    };
    
    formulaItemIconInnerText.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            addClue(e.target);
        });
        item.addEventListener('mouseout', (e) => {
            removeClue(e.target);
        });
    });
    
};

export default clue;