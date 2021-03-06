import {postData} from '../services/requests';

const drop = () => {

    const fileInputs = document.querySelectorAll('[name="upload"]'); /* получаем все элементы для загрузки изображения */

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => { /* перебираем массив событий */
        fileInputs.forEach(input => { /* перебираем все элементы для загрузки */
            input.addEventListener(eventName, preventDefaults, false); /* на каждый элемент для загрузки вешаем каждое событие, которое перебрали и отменяем стандартное поведение браузера */
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
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files; /* берем те файлы, которые мы перетаскиваем и засовываем их в текущий инпут */
            if (input.getAttribute('data-upload')) {
				e.preventDefault();
				e.stopPropagation();
				let formData = new FormData();
				[...input.files].forEach(file => {
					formData.append('image', file);
					postData('assets/server.php', formData)
						.then(res => {
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

export default drop;