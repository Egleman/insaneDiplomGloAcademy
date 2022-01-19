const sendForm = ( { formID } ) => {
    const form = document.getElementById(formID);
    const formLabel = form.querySelector('.checkbox__label');
    const formCheckBox = form.querySelector('.checkbox__input');

    formCheckBox.addEventListener('click', () => {
        if (formLabel.classList.contains('error')) {
            formLabel.classList.remove('error');
        }
    });
    
    //const statusBlock = document.createElement('div');
    //const loadText = 'Загрузка...';
    //const errorText = 'Ошибка...';
    //const successText = 'Спасибо, наш менеджер с вами свяжется';

    const validate = (list) => {
        let success = true;
        
        list.forEach((item) => {
            if (item.classList.contains('input-phone')) {
                if (!item.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,}$/gi)) {
                    success = false;
                    item.classList.add('error');
                }
            } else if (item.classList.contains('input-name')) {
                if (!item.value.match(/^[а-яА-Яa-zA-Z][а-яА-Яa-zA-Z]+[а-яА-Яa-zA-Z]?$/g)) {
                    success = false;
                    item.classList.add('error');
                }
            } else if (item.classList.contains('checkbox__input')) {
                if (!item.checked) {
                    success = false;
                    //item.classList.add('error');
                    formLabel.classList.add('error');
                }
            }
        });
        
        return success;
    };

    function unBlockBody() {
        const body = document.body;
        body.style.overflow = 'auto';
        body.style.marginRight = `0`;
    }

    const sendData = async (data) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "aplication/json"
            }
        });
        return await res.json();
    };
    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        //form.append(statusBlock);
        //statusBlock.textContent = loadText;
        
        formData.forEach((val, key) => {
            formBody[key] = val;
        });
        /*
        if(window.location.toString().indexOf('balkony.html') > 0){
            someElem.forEach(elem => {
                const element = document.getElementById(elem.id);
                if (elem.type === 'block') {
                    formBody[elem.id] = element.textContent;
                } else if (elem.type === 'input') {
                    formBody[elem.id] = element.value;
                }
            });
        }
        */

        if (validate(formElements)) {
            sendData(formBody).then(data => {
                formElements.forEach(input => {
                    input.value = '';
                    input.classList.remove('error');
                });
                alert('Успешно отправлено');
                /*
                statusBlock.textContent = successText;
                setTimeout(() => {
                    statusBlock.textContent = '';
                    const headerModal = document.querySelector(`.header-modal`);
                    const serviceModal = document.querySelector('.services-modal');
                    const modal = document.querySelector('.overlay');
                    headerModal.style.display = 'none';
                    serviceModal.style.display = 'none';
                    modal.style.display = 'none';
                    unBlockBody();
                }, 5000);
                */
            })
            .catch(err => {
                console.log(err, 'ошибка');
            });
        } else {
            alert('Данные не валидны');
        }
    };
    
    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста!');
        }
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                submitForm();
            });
    } catch(error) {
        console.log(error.message);
    }
};

export default sendForm;