/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_displayNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/displayNumber */ \"./modules/displayNumber.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_maskInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/maskInput */ \"./modules/maskInput.js\");\n/* harmony import */ var _modules_linkPrivacy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/linkPrivacy */ \"./modules/linkPrivacy.js\");\n/* harmony import */ var _modules_popUpClue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/popUpClue */ \"./modules/popUpClue.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_displayNumber__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_maskInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_linkPrivacy__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_popUpClue__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n    formID: 'feedback1',\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n    formID: 'feedback2',\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n    formID: 'feedback3',\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n    formID: 'feedback4',\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n    formID: 'feedback5',\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\r\n    formID: 'feedback6',\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/displayNumber.js":
/*!**********************************!*\
  !*** ./modules/displayNumber.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst displayNumber = () => {\r\n    const arrow = document.querySelector('.header-contacts__arrow');\r\n    const acord = document.querySelector('.header-contacts__phone-number-accord');\r\n    const acordNumb = document.querySelector('.opacity');\r\n\r\n    arrow.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        if (window.getComputedStyle(acordNumb).opacity == '1') {\r\n            acord.style.transform = 'translateY(0px)';\r\n            arrow.style.transform = 'rotate(0deg)';\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 100,\r\n                timing(timeFraction) {\r\n                  return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                  acordNumb.style.opacity = -progress;\r\n                }\r\n            });\r\n        } else {\r\n            acord.style.transform = 'translateY(25px)';\r\n            arrow.style.transform = 'rotate(180deg)';\r\n            (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 100,\r\n                timing(timeFraction) {\r\n                  return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                  acordNumb.style.opacity = progress;\r\n                }\r\n            });\r\n        }\r\n    });\r\n    \r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayNumber);\n\n//# sourceURL=webpack:///./modules/displayNumber.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nfunction animate({timing, draw, duration}) {\r\n\r\n    let start = performance.now();\r\n    \r\n    requestAnimationFrame(function animate(time) {\r\n      // timeFraction изменяется от 0 до 1\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) timeFraction = 1;\r\n    \r\n      // вычисление текущего состояния анимации\r\n      let progress = timing(timeFraction);\r\n    \r\n      draw(progress); // отрисовать её\r\n    \r\n      if (timeFraction < 1) {\r\n        requestAnimationFrame(animate);\r\n      }\r\n    \r\n    });\r\n  }\r\n\r\n   \n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/linkPrivacy.js":
/*!********************************!*\
  !*** ./modules/linkPrivacy.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst linkPrivacy = () => {\r\n    const linkPrivacy = document.querySelectorAll('.link-privacy');\r\n    const popUpPrivacy = document.querySelector('.popup-privacy');\r\n\r\n    linkPrivacy.forEach(link => {\r\n        link.addEventListener('click', () => {\r\n            popUpPrivacy.style.visibility = 'visible';\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkPrivacy);\n\n//# sourceURL=webpack:///./modules/linkPrivacy.js?");

/***/ }),

/***/ "./modules/maskInput.js":
/*!******************************!*\
  !*** ./modules/maskInput.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst maskInput = () => {\r\n    let inputPhone = document.querySelectorAll('.input-phone');\r\n    let inputName = document.querySelectorAll('.input-name');\r\n    let checkBoxLabel = document.querySelectorAll('.formCheckBox');\r\n\r\n    function setCursorPosition(pos, elem) {\r\n        elem.focus();\r\n        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);\r\n        else if (elem.createTextRange) {\r\n            let range = elem.createTextRange();\r\n            range.collapse(true);\r\n            range.moveEnd(\"character\", pos);\r\n            range.moveStart(\"character\", pos);\r\n            range.select();\r\n        }\r\n    }\r\n    \r\n    function mask(e) {\r\n        let matrix = \"+7 (___) ___-__-__\";\r\n        let i = 0;\r\n        let def = matrix.replace(/\\D/g, \"\");\r\n        let val = this.value.replace(/\\D/g, \"\");\r\n        if (def.length >= val.length) val = def;\r\n        this.value = matrix.replace(/./g, function(a) {\r\n            return /[_\\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? \"\" : a;\r\n        });\r\n        if (e.type == \"blur\") {\r\n            if (this.value.length == 2) this.value = \"\";\r\n        } else setCursorPosition(this.value.length, this);\r\n    }\r\n\r\n    const customTrim = (val) => {\r\n        val = val.replace(/\\s+/g, \" \"); //много пробелов в один\r\n        val = val.replace(/-+/g, '-'); //много дефисов в один\r\n        val = val.replace(/\\(+/g, '('); //много скобок в один\r\n        val = val.replace(/\\)+/g, ')'); //много скобок в один\r\n        val = val.replace(/^[ |\\-+]/g, ''); //удаление дефисов и пробелов в начале\r\n        val = val.replace(/[ |\\-+]$/g, ''); //удаление дефисов и пробелов в конце\r\n        return val;\r\n    };\r\n\r\n    inputPhone.forEach(input => {\r\n        input.addEventListener(\"input\", mask, false);\r\n        input.addEventListener(\"focus\", mask, false);\r\n        input.addEventListener(\"blur\", mask, false);\r\n    });\r\n        \r\n    inputName.forEach((input) => {\r\n        input.addEventListener('blur', (e) => {\r\n            let val = e.target.value;\r\n            val = val.replace(/[^а-яёA-Za-z]$/ig, '');\r\n            val = customTrim(val);\r\n            val = val.replace(/( |^)[ а-яёA-Za-z]/g, u => u.toUpperCase());\r\n            e.target.value = val;\r\n        });\r\n        input.addEventListener('input', () => {\r\n            input.value = input.value.replace(/[^а-яёA-Za-z}]$/ig, '');\r\n        });\r\n    });\r\n\r\n    inputPhone.forEach(input => {\r\n        input.addEventListener('click', () => {\r\n            if (input.classList.contains('error')) {\r\n                input.classList.remove('error');\r\n            }\r\n        });\r\n    });\r\n    inputName.forEach(input => {\r\n        input.addEventListener('click', () => {\r\n            if (input.classList.contains('error')) {\r\n                input.classList.remove('error');\r\n            }\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskInput);\n\n//# sourceURL=webpack:///./modules/maskInput.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const popupDialogMenu = document.querySelector('.popup-dialog-menu');\r\n    const popUp = document.querySelector('.popup-repair-types');\r\n    const popUpPrivacy = document.querySelector('.popup-privacy');\r\n\r\n    const handlemenu = () => {\r\n        popupDialogMenu.classList.toggle('active-menu');\r\n    };\r\n\r\n    window.addEventListener('click', (e) => {\r\n        if (e.target.closest('.menu__title') || e.target.closest('.menu__icon')) {\r\n            handlemenu();\r\n        } else if (e.target.closest('.close-menu')) {\r\n            handlemenu();\r\n        } else if (e.target.closest('a[href*=\"#\"]') && popupDialogMenu.contains(e.target)) {\r\n            if (!e.target.closest('.no-overflow')) {\r\n                e.preventDefault();\r\n                const blockId = e.target.getAttribute('href');\r\n                document.querySelector(blockId).scrollIntoView({\r\n                    behavior: 'smooth',\r\n                    block: 'start'\r\n                });\r\n                handlemenu();\r\n            } else {\r\n                e.preventDefault();\r\n                popUp.style.visibility = 'visible';\r\n                handlemenu();\r\n            }\r\n        } else if (e.target.closest('.button-footer')) {\r\n            e.preventDefault();\r\n            const blockId = e.target.getAttribute('href');\r\n            document.querySelector(blockId).scrollIntoView({\r\n                behavior: 'smooth',\r\n                block: 'start'\r\n            });\r\n        } else if (e.target.closest('.fullPrice-btn')) {\r\n            popUp.style.visibility = 'visible';\r\n        } else if (e.target.closest('.close')) {\r\n            popUp.style.visibility = 'hidden';\r\n            popUpPrivacy.style.visibility = 'hidden';\r\n        } else if (e.target.closest('.close-btn-Fullprice-mobile')) {\r\n            popUp.style.visibility = 'hidden';\r\n        }\r\n    });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/popUpClue.js":
/*!******************************!*\
  !*** ./modules/popUpClue.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst clue = () => {\r\n    const formulaItemIconInnerText = document.querySelectorAll('.formula-item__icon-inner-text');\r\n\r\n    const addClue = (elem) => {\r\n        let item = elem.closest('.formula-item');\r\n        item.querySelector('.formula-item-popup').classList.add('formula-item-active');\r\n        //item.querySelector('.formula-item-popup').classList.add('formula-item-trans');\r\n    };\r\n    const removeClue = (elem) => {\r\n        let item = elem.closest('.formula-item');\r\n        item.querySelector('.formula-item-popup').classList.remove('formula-item-active');\r\n    };\r\n    \r\n    formulaItemIconInnerText.forEach(item => {\r\n        item.addEventListener('mouseover', (e) => {\r\n            addClue(e.target);\r\n        });\r\n        item.addEventListener('mouseout', (e) => {\r\n            removeClue(e.target);\r\n        });\r\n    });\r\n    \r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clue);\n\n//# sourceURL=webpack:///./modules/popUpClue.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ( { formID } ) => {\r\n    const form = document.getElementById(formID);\r\n    const formLabel = form.querySelector('.checkbox__label');\r\n    const formCheckBox = form.querySelector('.checkbox__input');\r\n\r\n    formCheckBox.addEventListener('click', () => {\r\n        if (formLabel.classList.contains('error')) {\r\n            formLabel.classList.remove('error');\r\n        }\r\n    });\r\n    \r\n    //const statusBlock = document.createElement('div');\r\n    //const loadText = 'Загрузка...';\r\n    //const errorText = 'Ошибка...';\r\n    //const successText = 'Спасибо, наш менеджер с вами свяжется';\r\n\r\n    const validate = (list) => {\r\n        let success = true;\r\n        \r\n        list.forEach((item) => {\r\n            if (item.classList.contains('input-phone')) {\r\n                if (!item.value.match(/^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{6,}$/gi)) {\r\n                    success = false;\r\n                    item.classList.add('error');\r\n                }\r\n            } else if (item.classList.contains('input-name')) {\r\n                if (!item.value.match(/^[а-яА-Яa-zA-Z][а-яА-Яa-zA-Z]+[а-яА-Яa-zA-Z]?$/g)) {\r\n                    success = false;\r\n                    item.classList.add('error');\r\n                }\r\n            } else if (item.classList.contains('checkbox__input')) {\r\n                if (!item.checked) {\r\n                    success = false;\r\n                    //item.classList.add('error');\r\n                    formLabel.classList.add('error');\r\n                }\r\n            }\r\n        });\r\n        \r\n        return success;\r\n    };\r\n\r\n    function unBlockBody() {\r\n        const body = document.body;\r\n        body.style.overflow = 'auto';\r\n        body.style.marginRight = `0`;\r\n    }\r\n\r\n    const sendData = async (data) => {\r\n        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"aplication/json\"\r\n            }\r\n        });\r\n        return await res.json();\r\n    };\r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('input');\r\n        const formData = new FormData(form);\r\n        const formBody = {};\r\n\r\n        //form.append(statusBlock);\r\n        //statusBlock.textContent = loadText;\r\n        \r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val;\r\n        });\r\n        /*\r\n        if(window.location.toString().indexOf('balkony.html') > 0){\r\n            someElem.forEach(elem => {\r\n                const element = document.getElementById(elem.id);\r\n                if (elem.type === 'block') {\r\n                    formBody[elem.id] = element.textContent;\r\n                } else if (elem.type === 'input') {\r\n                    formBody[elem.id] = element.value;\r\n                }\r\n            });\r\n        }\r\n        */\r\n\r\n        if (validate(formElements)) {\r\n            sendData(formBody).then(data => {\r\n                formElements.forEach(input => {\r\n                    input.value = '';\r\n                    input.classList.remove('error');\r\n                });\r\n                alert('Успешно отправлено');\r\n                /*\r\n                statusBlock.textContent = successText;\r\n                setTimeout(() => {\r\n                    statusBlock.textContent = '';\r\n                    const headerModal = document.querySelector(`.header-modal`);\r\n                    const serviceModal = document.querySelector('.services-modal');\r\n                    const modal = document.querySelector('.overlay');\r\n                    headerModal.style.display = 'none';\r\n                    serviceModal.style.display = 'none';\r\n                    modal.style.display = 'none';\r\n                    unBlockBody();\r\n                }, 5000);\r\n                */\r\n            })\r\n            .catch(err => {\r\n                console.log(err, 'ошибка');\r\n            });\r\n        } else {\r\n            alert('Данные не валидны');\r\n        }\r\n    };\r\n    \r\n    try {\r\n        if (!form) {\r\n            throw new Error('Верните форму на место, пожалуйста!');\r\n        }\r\n            form.addEventListener('submit', (e) => {\r\n                e.preventDefault();\r\n                submitForm();\r\n            });\r\n    } catch(error) {\r\n        console.log(error.message);\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;