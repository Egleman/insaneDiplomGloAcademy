const clue = () => {
    const formulaItemIconInnerText = document.querySelectorAll('.formula-item__icon-inner-text');
    const formulaTitle = document.querySelector('.formula-title').style.zIndex = '-1';
    
    const addClue = (elem) => {
        let item = elem.closest('.formula-item');
        item.style.zIndex = '1';
        item.querySelector('.formula-item-popup').classList.add('formula-item-active');
        item.querySelector('.formula-item-popup').classList.add('formula-item-trans');
        if (item.querySelector('.formula-item-popup-01')) {
            console.log('есть');
            item.querySelector('.formula-item-popup-01').style.transform = 'rotate(180deg) translateY(-245px)';
            item.querySelector('.formula-item__descr').style.opacity = '0';
        } else if (item.querySelector('.formula-item-popup-02')) {
            console.log('есть');
            item.querySelector('.formula-item-popup-02').style.transform = 'rotate(180deg) translateY(-290px)';
            item.querySelector('.formula-item__descr').style.opacity = '0';
        } else if (item.querySelector('.formula-item-popup-03')) {
            console.log('есть');
            item.querySelector('.formula-item-popup-03').style.transform = 'rotate(180deg) translateY(-320px)';
            item.querySelector('.formula-item__descr').style.opacity = '0';
        } else if (item.querySelector('.formula-item-popup-04')) {
            console.log('есть');
            item.querySelector('.formula-item-popup-04').style.transform = 'rotate(180deg) translateY(-270px)';
            item.querySelector('.formula-item__descr').style.opacity = '0';
        } else if (item.querySelector('.formula-item-popup-05')) {
            console.log('есть');
            item.querySelector('.formula-item-popup-05').style.transform = 'rotate(180deg) translateY(-335px)';
            item.querySelector('.formula-item__descr').style.opacity = '0';
            item.querySelector('.formula-item-popup-05 > div').style.marginTop = '30px';
        } else if (item.querySelector('.formula-item-popup-06')) {
            console.log('есть');
            item.querySelector('.formula-item-popup-06').style.transform = 'rotate(180deg) translateY(-285px)';
            item.querySelector('.formula-item__descr').style.opacity = '0';
        } else {
            console.log('нету');
        }
    };
    
    const removeClue = (elem) => {
        let item = elem.closest('.formula-item');
        item.style.zIndex = '';
        item.querySelector('.formula-item-popup').classList.remove('formula-item-active');
        item.querySelector('.formula-item-popup').classList.remove('formula-item-trans');
        item.querySelector('.formula-item__descr').style.opacity = '1';
    };
    
    /*
    const addClue = (elem) => {
        let item = elem.closest('.formula-item');
        if (item.querySelector('formula-item-popup-01')) {
            console.log(item.querySelector('formula-item-popup-01'));
        }
    };
    */
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