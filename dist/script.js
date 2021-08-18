/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calcPicture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calcPicture */ "./src/js/modules/calcPicture.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");
/* harmony import */ var _modules_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/drop */ "./src/js/modules/drop.js");













window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  Object(_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row');
  Object(_modules_calcPicture__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price');
  Object(_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])('.sizes-block');
  Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_9__["default"])('.accordion-heading');
  Object(_modules_hamburger__WEBPACK_IMPORTED_MODULE_10__["default"])('.burger', '.burger-menu', '.burger-menu li');
  Object(_modules_scrolling__WEBPACK_IMPORTED_MODULE_11__["default"])('.pageup');
  Object(_modules_drop__WEBPACK_IMPORTED_MODULE_12__["default"])();
});

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const accordion = triggerSelector => {
  const trigger = document.querySelectorAll(triggerSelector);
  trigger.forEach(btn => {
    /* перебираем все кнопки */
    btn.addEventListener('click', function () {
      /* на каждую кнопку вешаем клик */
      if (!this.classList.contains('ui-accordion-header-active')) {
        /* если у текущей кнопки нет класс активности */
        showContent(btn);
        /* то вызываем функцию по открытию */
      } else {
        hideContent();
        /* иначе закрываем */
      }
    });
  });

  function showContent(btn) {
    hideContent();
    btn.classList.add('ui-accordion-header-active');
    btn.nextElementSibling.classList.add('animated', 'fadeInDown');
    btn.nextElementSibling.classList.add('accordion-block-active');
  }

  function hideContent() {
    trigger.forEach(btn => {
      btn.classList.remove('ui-accordion-header-active');
      btn.nextElementSibling.classList.remove('animated', 'fadeInDown');
      btn.nextElementSibling.classList.remove('accordion-block-active');
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./src/js/modules/calcPicture.js":
/*!***************************************!*\
  !*** ./src/js/modules/calcPicture.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calcPicture = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);
  let sum = 0;

  const calcFunc = () => {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);

    if (sizeBlock.value == '' || materialBlock.value == '') {
      resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
    } else if (promocodeBlock.value === 'IWANTPOPART') {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };

  sizeBlock.addEventListener('change', calcFunc);
  materialBlock.addEventListener('change', calcFunc);
  optionsBlock.addEventListener('change', calcFunc);
  promocodeBlock.addEventListener('input', calcFunc);
};

/* harmony default export */ __webpack_exports__["default"] = (calcPicture);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(input => {
    /* Перебираем каждый инпут */
    input.addEventListener('keypress', function (e) {
      /* И вешаем обработчик события нажатия клавиши  */
      if (e.key.match(/[^а-яё 0-9]/ig)) {
        /* Если значение клавиши русские буквы и цифры */
        e.preventDefault();
        /* То сбрасываем стандартные настройки */
      }
    });
    input.addEventListener('input', e => {
      /* При событии инпут */
      if (input.value.match(/[a-z]/ig)) {
        /* Проверяем на английские буквы */
        input.value = '';
        /* Если они есть то подставляем пустое значение */

        e.preventDefault();
        /* И сбрасываем стандартные настройки */
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/drop.js":
/*!********************************!*\
  !*** ./src/js/modules/drop.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');
  /* получаем все элементы для загрузки изображения */

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    /* перебираем массив событий */
    fileInputs.forEach(input => {
      /* перебираем все элементы для загрузки */
      input.addEventListener(eventName, preventDefaults, false);
      /* на каждый элемент для загрузки вешаем каждое событие, которое перебрали и отменяем стандартное поведение браузера */
    });
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(item) {
    item.closest('.file_upload').style.borderRadius = '50px';
    item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
  }

  function unHighlight(item) {
    item.closest('.file_upload').style.borderRadius = 'none';
    item.closest('.file_upload').style.backgroundColor = 'inherit';
  }

  ['dragenter', 'dragover'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });
  ['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => unHighlight(input), false);
    });
  });
  fileInputs.forEach(input => {
    input.addEventListener('drop', e => {
      input.files = e.dataTransfer.files;
      /* берем те файлы, которые мы перетаскиваем и засовываем их в текущий инпут */

      if (input.getAttribute('data-upload')) {
        e.preventDefault();
        e.stopPropagation();
        let formData = new FormData();
        [...input.files].forEach(file => {
          formData.append('image', file);
          Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["postData"])('assets/server.php', formData).then(res => {
            console.log(res);
          });
        });
      }
      /* Добавляем точки к длинным словам */


      let dots;
      const arr = input.files[0].name.split('.');

      if (arr[0].length > 6) {
        dots = '...';
      } else {
        dots = '.';
      }

      const name = arr[0].substring(0, 6) + dots + arr[1];
      input.previousElementSibling.textContent = name;
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (drop);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),

  /* Получаем меню */
  items = menu.querySelectorAll('li'),

  /* Получаем элементы меню */
  wrapper = document.querySelector('.portfolio-wrapper'),

  /* Получаем обертку картинок */
  markAll = wrapper.querySelectorAll('.all'),

  /* Получаем из обертки картинок все элементы у которых есть класс all */
  markNo = document.querySelector('.portfolio-no');

  const typeFilter = markType => {
    /* Перебираем все элементы и скрываем каждый элемент */
    markAll.forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });
    /* Скрываем элемент markNo */

    markNo.style.display = 'none';
    markNo.classList.remove('animated', 'fadeIn');

    if (markType) {
      markType.forEach(mark => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      markNo.style.display = 'block';
      markNo.classList.add('animated', 'fadeIn');
    }
  };

  menu.addEventListener('click', e => {
    let target = e.target;
    /* тот элемент на котором происходит событие (клик) */

    if (target && target.tagName === 'LI') {
      /* Если тот элемент на который кликнули существует и это тэг li */
      items.forEach(btn => btn.classList.remove('active'));
      /* Убираем класс активности со всех элементов в меню */

      target.classList.add('active');
      /* А элементу на котором происходит событие (клик) добавляем класс активности */
    }

    let classSelect = target.classList[0];
    /* Получаем первый класс элемента на котором происходит событие (клик) */

    let eachElems = wrapper.querySelectorAll(`.${classSelect}`);
    /* Получаем тот класс в обертке, который совпадает с классом нажатой кнопки */

    wrapper.style.justifyContent = 'center';

    if (classSelect == 'grandmother' || classSelect == 'granddad') {
      typeFilter();
    } else {
      typeFilter(eachElems);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const forms = () => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        textarea = document.querySelector('textarea'),
        upload = document.querySelectorAll('[name="upload"]');
  const message = {
    loading: 'Загрузка..',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так..',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };
  /* Переменная с путями */

  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  };
  /* Функция по очищению инпутов */

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
    textarea.value = '';
    upload.forEach(item => {
      item.previousElementSibling.textContent = 'Файл не выбран';
    });
  };
  /* Перебираем каждый upload и вешаем событие инпут */


  upload.forEach(item => {
    item.addEventListener('input', () => {
      console.log(item.files[0]);
      /* Показываем имя первого файла */

      let dots;
      const arr = item.files[0].name.split('.');
      /* Разбиваем название файла точкой */

      if (arr[0].length > 6) {
        /* Если первая часть больше 6 символов, то добавляем ... */
        dots = '...';
        /* Если меньше, то одна точка */
      } else {
        dots = '.';
      }
      /* Формируем имя */


      const name = arr[0].substring(0, 6) + dots + arr[1];
      /* Первая часть с первого по 6 символ(substring) + точки + вторая часть */

      item.previousElementSibling.textContent = name;
      /* Добавляем имя к соседнему предидущему элементу от upload */
    });
  });
  /* Перебираем каждую форму и навешиваем событие submit */

  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      /* Создали новый блок */

      statusMessage.classList.add('status');
      /* Добавили класс статус */

      item.parentNode.appendChild(statusMessage);
      /* Добавили блок в родителя формы */

      /* Убираем форму */

      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);
      let statusImg = document.createElement('img');
      /* Создали тэг img */

      statusImg.setAttribute('src', message.spinner);
      /* Устанавливаем атрибут src и помещаем в него адрес message.spinner */

      statusImg.classList.add('animated', 'fadeInUp');
      /* Добавили анимацию */

      statusMessage.appendChild(statusImg);
      /* Добавляем img в новый блок */

      let textMessage = document.createElement('div');
      /* Создали блок */

      textMessage.textContent = message.loading;
      /* Запишем текст message.loading */

      statusMessage.appendChild(textMessage);
      /* Добавляем созданный блок в statusMessage */

      const formData = new FormData(item);
      let api;
      /* Если у формы где-то есть класс popup-design или calc-form */

      if (item.closest('.popup-design') || item.classList.contains('calc-form')) {
        api = path.designer;
        /* Если нет */
      } else {
        api = path.question;
      }

      console.log(api);
      Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["postData"])(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
        }, 3000);
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hamburger = (hamburgerSelector, menuSelector, menuItemSelector) => {
  const burger = document.querySelector(hamburgerSelector),
        menu = document.querySelector(menuSelector),
        menuItem = document.querySelectorAll(menuItemSelector);
  menu.style.display = 'none';
  /* изначально скрываем гамбургер меню */

  burger.addEventListener('click', () => {
    /* вешаем клик на гамбургер */
    if (menu.style.display == 'none' && window.screen.availWidth < 993) {
      /* если гамбургер меню скрыто и ширина меньше 993 */
      menu.classList.add('animated', 'fadeIn');
      menu.style.display = 'block';
      /* то показывем гамбургер меню */
    } else {
      menu.style.display = 'none';
      /* если условия не выполнились, то скрываем */
    }
  });
  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      /* при клике на каждый пункт из гамбургер меню, скрываем гмбургер меню */
      menu.style.display = 'none';
    });
  });
  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      /* если ширина экрана станет больше 992, то скрываем гамбургер меню */
      menu.style.display = 'none';
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  /* Установка позиции курсора */
  let setCursorPosition = (pos, elem) => {
    elem.addEventListener('click', () => {
      elem.selectionStart = elem.selectionEnd = elem.value.length;
      /* если начало и конец совпадают, то будем будет присваивать значение количества элементов */
    });
    elem.focus();
    /* Установили фокус на элементе */

    if (elem.setSelectionRange) {
      /* Если у элемента есть такой метод */
      elem.setSelectionRange(pos, pos);
      /* То устанавливаем у этого метода начальную и конечную позицию (если один и тот же элемент, то курсор будет в определенной позиции) */
    } else if (elem.createTextRange) {
      /* Если у элемента есть такой метод (для IE) */
      let range = elem.createTextRange();
      /* То используем такой метод */

      range.collapse(true);
      /* Устанавливаем граничные точки диапазона в true */

      range.moveEnd('character', pos);
      /* Конечная точка */

      range.moveStart('character', pos);
      /* Начальная точка */

      range.select();
      /* Установили курсор и выделили элемент */
    }
  };

  function createMask(e) {
    let matrix = '+7 (___) ___ __ __',

    /* Маска */
    i = 0,
        def = matrix.replace(/\D/g, ''),

    /* Все не цифры заменяем на пустую строку */
    val = this.value.replace(/\D/g, '');
    /* У контекста (на основе того, что ввел пользователь) все не цифры заменяем на пустую строку */

    if (def.length >= val.length) {
      /* Если количество цифр в def будет больше или равно в val */
      val = def;
      /* То мы подставляем дефолтное значение def */
    }

    this.value = matrix.replace(/./g, function (a) {
      /* В контекст (куда ввел пользователь) кладем матрицу со всеми элеменатми и для каждого элемента создаем функцию */
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      /* возвращаем каждый символ, проверяем входит ли он в определенный диапазон (цифры) и i будет меньше количеству символов в val (которое уже избавилось от всех не цифр). */

      /* Если условие выполнилось, то будем из функции возвращать следующий символ. А если i будет больше или равно количеству символов в val, то будем возвращать пустую строку. Если нет, то будем возвращать a */
    });

    if (e.type === 'blur') {
      /* Если тип события блюр */
      if (this.value.length == 2) {
        /* Если количество символов будет равно 2 */
        this.value = '';
        /* То записываем пустую строку */
      }
    } else {
      setCursorPosition(this.value.length, this);
      /* Если другое событие, то передаем функцию с аргументами (количество символов, которое есть сейчас и ссылка на элемент, который сейчас в работе) */
    }
  }

  let inputs = document.querySelectorAll(selector);
  /* Создаем переменную инпутс */

  inputs.forEach(input => {
    /* На каждый инпут вешаем несколько обработчиков событий */
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
  let btnPressed = false;
  const scrollHide = calcScroll();
  /* Функция отвечает за привязку модального окна к определенному тригеру */

  function bindModal(triggerSelector, modalSelector, closeSelector, deleteTrigger = false) {
    const trigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector);
    /* При клике на каждый триггер открываем модальное окно */

    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }

        btnPressed = true;
        /* Означает, что нажали на какой-то из триггеров  */

        /* Удаляем/скрываем триггер при открытии окна, если в вызове стоит true */

        if (deleteTrigger == true) {
          item.style.display = 'none'; // item.remove();
        }

        hidePrevModal();
        openModal(modal);
      });
    });
    /* По клику на кнопку закрытия закрываем модальное окно */

    close.addEventListener('click', () => {
      closeModal(modal);
    });
    /* По клику по подложке модального окна закрываем окно */

    modal.addEventListener('click', e => {
      if (e.target === modal) {
        hidePrevModal();
        closeModal(modal);
      }
    });
  }
  /* Функция по открытию модального окна */


  function openModal(item) {
    item.style.display = 'block';
    document.body.style.overflow = 'hidden';
    clearInterval(byTime);
    addMargin();
  }
  /* Функция по закрытию модального окна */


  function closeModal(item) {
    item.style.display = 'none';
    document.body.style.overflow = '';
    hideMargin();
  }
  /* При открытии нового модального окна предидущее будет закрываться */


  function hidePrevModal() {
    document.querySelectorAll('[data-modal]').forEach(elem => {
      elem.style.display = 'none';
      elem.classList.add('animated', 'fadeIn');
    });
  }
  /* Добавление отступа для модального окна и подарка */


  function addMargin() {
    document.body.style.marginRight = `${scrollHide}px`;
    document.querySelector('.fixed-gift').style.marginRight = `${scrollHide}px`;
    document.querySelector('.pageup').style.marginRight = `${scrollHide}px`;
  }
  /* Удаление отступа для модального окна и подарка */


  function hideMargin() {
    document.body.style.marginRight = `0px`;
    document.querySelector('.fixed-gift').style.marginRight = `0px`;
    document.querySelector('.pageup').style.marginRight = `0px`;
  }
  /* Открытие модального окна с подарком при скролле до конца страницы */


  function showModalByScroll(selector) {
    window.addEventListener('scroll', () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

      if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= scrollHeight) {
        document.querySelector(selector).click();
        /* Имитирует клик (как будто кликнули по этому элементу) */
      }
    });
  }
  /* Открытие модального окна через минуту */


  let byTime;

  function showModalByTime(selector, time) {
    byTime = setTimeout(() => {
      document.querySelector(selector).click();
      addMargin();
    }, time);
  }
  /* Функция по высчитыванию размера бокового скролла */


  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  showModalByScroll('.fixed-gift');
  showModalByTime('.button-consultation', 60000);
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);
  /* Функция по показу изображения */

  function showImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png';
    /* Вырезаем в пути картинки последние 4 символа и приписываем -1.png */

    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      /* все параграфы в блоке, кроме с классом .sizes-hit */
      p.style.display = 'none';
      /* скрываем */
    });
  }
  /* Функция по скрытию изображения */


  function hideImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png';
    /* Вырезаем в пути картинки последние 6 символов и приписываем .png */

    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      /* все параграфы в блоке, кроме с классом .sizes-hit */
      p.style.display = 'block';
      /* показываем */
    });
  }
  /* Перебираем все блоки и каждому блоку вешаем события */


  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      /* Когда курсор над элементом, то показываем иозображение */
      showImg(block);
    });
    block.addEventListener('mouseout', () => {
      /* Когда курсор уходит с элемента, то скрываем изображение */
      hideImg(block);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);
  /* получаем кнопку вверх */

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      /* если прокрученное расстояние больше 1650 пикселей */
      upElem.classList.add('animated', 'fadeIn');
      /* то показываем кнопку вверх с анимацией */

      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      /* скрываем кнопку вверх с анимацией */

      upElem.classList.remove('fadeIn');
    }
  });
  /* Скролл с помощью requestAnimationFrame */

  let links = document.querySelectorAll('[href^="#"]'),

  /* получаем все ссылки, которые начинаются с # (хэш) */
  speed = 0.2;
  /* переменная отвечает за скорость */

  links.forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      let heightTop = document.documentElement.scrollTop,

      /* прокрученное расстояние */
      hash = this.hash,

      /* текущий хэш (#) */
      toBlock = document.querySelector(hash).getBoundingClientRect().top,

      /* верхняя граница  */
      start = null;
      /* стартовая позиция */

      requestAnimationFrame(step);

      function step(time) {
        /* аргумент будет передаваться автоматически */
        if (start === null) {
          start = time;
        }

        let progress = time - start,
            r = toBlock < 0 ? Math.max(heightTop - progress / speed, heightTop + toBlock) : Math.min(heightTop + progress / speed, heightTop + toBlock);
        /* отвечает за количество пикселей, которые необходимо пролистать в течение анимации */

        document.documentElement.scrollTo(0, r);

        if (r != heightTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
  /* Скролл на чистом JS */
  // const element = document.documentElement,
  //       body = document.body;
  // const calcScroll = () => {
  //     upElem.addEventListener('click', function(event) {
  //         let scrollTop = Math.round(body.scrollTop || element.scrollTop); /* Узнаем какое расстояние было пролистано вниз*/
  //         if (this.hash !== '') { /* Если текущий хэш(#) не пустой */
  //             event.preventDefault(); /* То отменяем стандартное поведение браузера */
  //             let hashElement = document.querySelector(this.hash),
  //                 hashElementTop = 0; /* Родительский элемент */
  //             while (hashElement.offsetParent) { 
  //                 hashElementTop += hashElement.offsetTop;
  //                 hashElement = hashElement.offsetParent;
  //             }
  //             hashElementTop = Math.round(hashElementTop);
  //             smoothScroll(scrollTop, hashElementTop, this.hash);
  //         }
  //     });
  // };
  // const smoothScroll = (from, to, hash) => { /* аргументы (откуда, куда и текущий хэш) */
  //     let timeInterval = 1, /* время, через которое будет производиться анимация */
  //         prevScrollTop, /* предшествующее значение */
  //         speed; /* с какой скоростью будет происходить анимация */
  //     if (to > from) { /* если куда больше, чем откуда (то есть сверху вниз) */
  //         speed = 30; 
  //     } else { /* если снизу вверх */
  //         speed = -30;
  //     }
  //     let move = setInterval(function() {
  //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);
  //         if (
  //             prevScrollTop === scrollTop ||
  //             (to > from && scrollTop >= to) ||
  //             (to < from && scrollTop <= to)
  //         ) {
  //             clearInterval(move);
  //             history.replaceState(history.state, document.title, location.href.replace(/#.*/g, '') + hash);
  //         } else {
  //             body.scrollTop += speed;
  //             element.scrollTop += speed;
  //             prevScrollTop = scrollTop;
  //         }
  //     }, timeInterval);
  // };
  // calcScroll();
};

/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger); // const cards = document.querySelectorAll(cards);

  /* Способ с данными из верстки */
  // cards.forEach(item => {
  //     item.classList.add('animated', 'fadeInUp');
  // });
  // btn.addEventListener('click', () => {
  //     cards.forEach(item => {
  //         item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
  //         item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
  //     });
  //     btn.remove();
  // });

  /* Способ с данными из сервера */

  btn.addEventListener('click', function () {
    Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getResource"])('http://localhost:3000/styles').then(res => createCards(res)).catch(() => showError());
    setTimeout(() => {
      this.remove();
    }, 300);
  });

  function createCards(response) {
    response.forEach(({
      src,
      title,
      link
    }) => {
      let card = document.createElement('div');
      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;
      document.querySelector(wrapper).appendChild(card);
    });
  }

  function showError() {
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    statusMessage.textContent = 'Что-то пошло не так';
    statusMessage.style.cssText = `
            text-align: center;
            font-size: 45px;
            color: #c51abb;
        `;
    document.querySelector(wrapper).appendChild(statusMessage);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliders = (slides, direction, prev, next) => {
  let slideIndex = 1;
  /* Данная переменная будет отвечать за текущий слайд */

  let paused = false;
  const items = document.querySelectorAll(slides);
  /* Функция, которая будет отвечать за перемещение slideIndex и слайда */

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });
    items[slideIndex - 1].style.display = 'block';
  }

  showSlides(slideIndex);
  /* При запуске функции скроет все слайды и покажет только первый */

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  try {
    const prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
    nextBtn.addEventListener('click', () => {
      plusSlides(1);
      items[slideIndex - 1].classList.remove('slideInRight');
      items[slideIndex - 1].classList.add('slideInLeft');
    });
  } catch (e) {}

  function activateAnimation() {
    if (direction === 'vertical') {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.remove('slideInRight');
        items[slideIndex - 1].classList.add('slideInLeft');
      }, 3000);
    }
  }

  activateAnimation();
  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: 'POST',
    body: data
  });
  return await res.text();
};

const getResource = async url => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};



/***/ })

/******/ });
//# sourceMappingURL=script.js.map