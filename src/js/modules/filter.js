const filter = () => {

    const menu = document.querySelector('.portfolio-menu'), /* Получаем меню */
          items = menu.querySelectorAll('li'), /* Получаем элементы меню */
          wrapper = document.querySelector('.portfolio-wrapper'), /* Получаем обертку картинок */
          markAll = wrapper.querySelectorAll('.all'), /* Получаем из обертки картинок все элементы у которых есть класс all */
          markNo = document.querySelector('.portfolio-no'); 

    const typeFilter = (markType) => {
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

    menu.addEventListener('click', (e) => {
        let target = e.target; /* тот элемент на котором происходит событие (клик) */
        if (target && target.tagName === 'LI') { /* Если тот элемент на который кликнули существует и это тэг li */
            items.forEach((btn) => btn.classList.remove('active')); /* Убираем класс активности со всех элементов в меню */
            target.classList.add('active'); /* А элементу на котором происходит событие (клик) добавляем класс активности */
        }

        let classSelect = target.classList[0]; /* Получаем первый класс элемента на котором происходит событие (клик) */
        let eachElems = wrapper.querySelectorAll(`.${classSelect}`); /* Получаем тот класс в обертке, который совпадает с классом нажатой кнопки */

        wrapper.style.justifyContent = 'center';
        
        if (classSelect == 'grandmother' || classSelect == 'granddad') {
            typeFilter();
        } else {
            typeFilter(eachElems);
        }
        
    });



};

export default filter;