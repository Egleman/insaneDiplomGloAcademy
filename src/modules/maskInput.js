const maskInput = () => {
    let inputPhone = document.querySelectorAll('.input-phone');
    let inputName = document.querySelectorAll('.input-name');
    let checkBoxLabel = document.querySelectorAll('.formCheckBox');

    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    }
    
    function mask(e) {
        let matrix = "+7 (___) ___-__-__";
        let i = 0;
        let def = matrix.replace(/\D/g, "");
        let val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });
        if (e.type == "blur") {
            if (this.value.length == 2) this.value = "";
        } else setCursorPosition(this.value.length, this);
    }

    const customTrim = (val) => {
        val = val.replace(/\s+/g, " "); //много пробелов в один
        val = val.replace(/-+/g, '-'); //много дефисов в один
        val = val.replace(/\(+/g, '('); //много скобок в один
        val = val.replace(/\)+/g, ')'); //много скобок в один
        val = val.replace(/^[ |\-+]/g, ''); //удаление дефисов и пробелов в начале
        val = val.replace(/[ |\-+]$/g, ''); //удаление дефисов и пробелов в конце
        return val;
    };

    inputPhone.forEach(input => {
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
    });
        
    inputName.forEach((input) => {
        input.addEventListener('blur', (e) => {
            let val = e.target.value;
            val = val.replace(/[^а-яёA-Za-z]$/ig, '');
            val = customTrim(val);
            val = val.replace(/( |^)[ а-яёA-Za-z]/g, u => u.toUpperCase());
            e.target.value = val;
        });
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^а-яёA-Za-z}]$/ig, '');
        });
    });

    inputPhone.forEach(input => {
        input.addEventListener('click', () => {
            if (input.classList.contains('error')) {
                input.classList.remove('error');
            }
        });
    });
    inputName.forEach(input => {
        input.addEventListener('click', () => {
            if (input.classList.contains('error')) {
                input.classList.remove('error');
            }
        });
    });
};

export default maskInput;