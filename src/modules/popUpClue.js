const clue = () => {
    const formulaItemIconInnerText = document.querySelectorAll('.formula-item__icon-inner-text');
    const formulaTitle = document.querySelector('.formula-title').style.zIndex = '-1';
    
    const addClue = (elem) => {
        let item = elem.closest('.formula-item');
        //item.style.zIndex = '1';
        //item.querySelector('.formula-item-popup').classList.add('formula-item-active');
        //observer.observe(item.querySelector('.formula-item-popup'));
        
        //item.querySelector('.formula-item-popup').classList.add('formula-item-trans');
        if (item.querySelector('.formula-item-popup-01')) {
            observer.observe(item.querySelector('.formula-item-popup-01'));
            //console.log('есть');
            //item.querySelector('.formula-item-popup-01').style.transform = 'rotate(180deg) translateY(-245px)';
            //item.querySelector('.formula-item__descr').style.opacity = '0';
        } else if (item.querySelector('.formula-item-popup-02')) {
            observer.observe(item.querySelector('.formula-item-popup-02'));
            //console.log('есть');
            //item.querySelector('.formula-item-popup-02').style.transform = 'rotate(180deg) translateY(-290px)';
            //item.querySelector('.formula-item__descr').style.opacity = '0';
        } else if (item.querySelector('.formula-item-popup-03')) {
            observer.observe(item.querySelector('.formula-item-popup-03'));
            //console.log('есть');
            //item.querySelector('.formula-item-popup-03').style.transform = 'rotate(180deg) translateY(-320px)';
            //item.querySelector('.formula-item__descr').style.opacity = '0';
        } else if (item.querySelector('.formula-item-popup-04')) {
            observer.observe(item.querySelector('.formula-item-popup-04'));
            //console.log('есть');
            //item.querySelector('.formula-item-popup-04').style.transform = 'rotate(180deg) translateY(-270px)';
            //item.querySelector('.formula-item__descr').style.opacity = '0';
        } else if (item.querySelector('.formula-item-popup-05')) {
            observer.observe(item.querySelector('.formula-item-popup-05'));
            //console.log('есть');
            //item.querySelector('.formula-item-popup-05').style.transform = 'rotate(180deg) translateY(-335px)';
            //item.querySelector('.formula-item__descr').style.opacity = '0';
            //item.querySelector('.formula-item-popup-05 > div').style.marginTop = '30px';
        } else if (item.querySelector('.formula-item-popup-06')) {
            observer.observe(item.querySelector('.formula-item-popup-06'));
            //console.log('есть');
            //item.querySelector('.formula-item-popup-06').style.transform = 'rotate(180deg) translateY(-285px)';
            //item.querySelector('.formula-item__descr').style.opacity = '0';
        } else {
            console.log('нету');
        }
    };

    const addClueDown = (elem) => {
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
        if (item.querySelector('.formula-item-popup').classList.contains('formula-item-trans')) {
            item.querySelector('.formula-item-popup').classList.remove('formula-item-trans');
        }
        
        if (item.querySelector('.formula-item-popup-01')) {
            //console.log('есть');
            item.querySelector('.formula-item-popup-01').style.transform = 'rotate(0deg) translateY(-5px)';
            item.querySelector('.formula-item__descr').style.opacity = '1';
        } else if (item.querySelector('.formula-item-popup-02')) {
            //console.log('есть');
            item.querySelector('.formula-item-popup-02').style.transform = 'rotate(0deg) translateY(-5px)';
            item.querySelector('.formula-item__descr').style.opacity = '1';
        } else if (item.querySelector('.formula-item-popup-03')) {
            //console.log('есть');
            item.querySelector('.formula-item-popup-03').style.transform = 'rotate(0deg) translateY(-5px)';
            item.querySelector('.formula-item__descr').style.opacity = '1';
        } else if (item.querySelector('.formula-item-popup-04')) {
            //console.log('есть');
            item.querySelector('.formula-item-popup-04').style.transform = 'rotate(0deg) translateY(-5px)';
            item.querySelector('.formula-item__descr').style.opacity = '1';
        } else if (item.querySelector('.formula-item-popup-05')) {
            //console.log('есть');
            item.querySelector('.formula-item-popup-05').style.transform = 'rotate(0deg) translateY(-5px)';
            item.querySelector('.formula-item__descr').style.opacity = '1';
            item.querySelector('.formula-item-popup-05 > div').style.marginTop = '0px';
        } else if (item.querySelector('.formula-item-popup-06')) {
            //console.log('есть');
            item.querySelector('.formula-item-popup-06').style.transform = 'rotate(0deg) translateY(-5px)';
            item.querySelector('.formula-item__descr').style.opacity = '1';
        } else {
            console.log('нету');
        }
    };
    
    const observer = new IntersectionObserver((entries, observe) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.zIndex = '1';
                entry.target.classList.add('formula-item-active');
                observer.unobserve(entry.target);
            } else if (!entry.isIntersecting) {
                addClueDown(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.9 });

    formulaItemIconInnerText.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            
            addClue(e.target);
            //observer.observe(e.target);
        });
        item.addEventListener('mouseout', (e) => {
            removeClue(e.target);
        });
    });
    
};

export default clue;