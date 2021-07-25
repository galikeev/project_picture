const checkTextInputs = (selector) => {

    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => { /* Перебираем каждый инпут */
        input.addEventListener('keypress', function(e) { /* И вешаем обработчик события нажатия клавиши  */
            if (e.key.match(/[^а-яё 0-9]/ig)) { /* Если значение клавиши русские буквы и цифры */
                e.preventDefault(); /* То сбрасываем стандартные настройки */
            }
        });

        input.addEventListener('input', (e) => { /* При событии инпут */
			if (input.value.match(/[a-z]/ig)) { /* Проверяем на английские буквы */
				input.value = ''; /* Если они есть то подставляем пустое значение */
                e.preventDefault(); /* И сбрасываем стандартные настройки */
			}
		});
    });

};

export default checkTextInputs;