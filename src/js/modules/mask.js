const mask = (selector) => {

    /* Установка позиции курсора */
    let setCursorPosition = (pos, elem) => {

        elem.addEventListener('click', () => {
			elem.selectionStart = elem.selectionEnd = elem.value.length; /* если начало и конец совпадают, то будем будет присваивать значение количества элементов */
		});

        elem.focus(); /* Установили фокус на элементе */

        if (elem.setSelectionRange) { /* Если у элемента есть такой метод */
            elem.setSelectionRange(pos, pos); /* То устанавливаем у этого метода начальную и конечную позицию (если один и тот же элемент, то курсор будет в определенной позиции) */
        } else if (elem.createTextRange) { /* Если у элемента есть такой метод (для IE) */
            let range = elem.createTextRange(); /* То используем такой метод */

            range.collapse(true); /* Устанавливаем граничные точки диапазона в true */
            range.moveEnd('character', pos); /* Конечная точка */
            range.moveStart('character', pos); /* Начальная точка */
            range.select(); /* Установили курсор и выделили элемент */
        }
    };

    function createMask(e) {
        let matrix = '+7 (___) ___ __ __', /* Маска */
            i = 0,
            def = matrix.replace(/\D/g, ''), /* Все не цифры заменяем на пустую строку */
            val = this.value.replace(/\D/g, ''); /* У контекста (на основе того, что ввел пользователь) все не цифры заменяем на пустую строку */

        if (def.length >= val.length) { /* Если количество цифр в def будет больше или равно в val */
            val = def; /* То мы подставляем дефолтное значение def */
        }

        this.value = matrix.replace(/./g, function(a) { /* В контекст (куда ввел пользователь) кладем матрицу со всеми элеменатми и для каждого элемента создаем функцию */
            return  /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a; 
            /* возвращаем каждый символ, проверяем входит ли он в определенный диапазон (цифры) и i будет меньше количеству символов в val (которое уже избавилось от всех не цифр). */
            /* Если условие выполнилось, то будем из функции возвращать следующий символ. А если i будет больше или равно количеству символов в val, то будем возвращать пустую строку. Если нет, то будем возвращать a */
        });

        if (e.type === 'blur') { /* Если тип события блюр */
            if (this.value.length == 2) { /* Если количество символов будет равно 2 */
                this.value = ''; /* То записываем пустую строку */
            }
        } else {
            setCursorPosition(this.value.length, this); /* Если другое событие, то передаем функцию с аргументами (количество символов, которое есть сейчас и ссылка на элемент, который сейчас в работе) */
        }
    }

    let inputs = document.querySelectorAll(selector); /* Создаем переменную инпутс */

    inputs.forEach(input => { /* На каждый инпут вешаем несколько обработчиков событий */
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });

};

export default mask;