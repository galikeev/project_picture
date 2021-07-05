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
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                btnPressed = true;
                /* Удаляем триггер при открытии окна, если в вызове стоит true */
                if (deleteTrigger == true) {
                    item.remove();
                }
                hidePrevModal();
                openModal(modal);
                addMargin();
            });
        });
        /* По клику на кнопку закрытия закрываем модальное окно */
        close.addEventListener('click', () => {
            closeModal(modal);
            hideMargin();
        });
        /* По клику по подложке модального окна закрываем окно */
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hidePrevModal();
                closeModal(modal);
                hideMargin();
            }
        });
    }
    /* Функция по открытию модального окна */
    function openModal(item) {
        item.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // clearInterval(showModalByTime);
    }
    /* Функция по закрытию модального окна */
    function closeModal(item) {
        item.style.display = 'none';
        document.body.style.overflow = '';
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
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight && !btnPressed) {
            document.querySelector('.popup-gift').style.display = 'block';
            document.querySelector('.fixed-gift').remove();
            document.body.style.overflow = "hidden";
            addMargin();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    /* Открытие модального окна через минуту */
    // const showModalByTime = setTimeout(() => {
    //     document.querySelector('.popup-consultation').style.display = 'block';
    //     document.body.style.overflow = "hidden";
    //     addMargin();
    // }, 60000);
    function showModalByTime(selector, time) {
        setTimeout(() => {
            let displayStyle;
            document.querySelectorAll('[data-modal').forEach(item => {
                /* Если у каждого окна дисплей = нон, то в переменную записываем блок */
                if (getComputedStyle(item).display !== 'none') {
                    displayStyle = 'block';
                }
                /* Если у окна дисплей не блок, то устанавливаем блок  */
                if (!displayStyle) {
                    document.querySelector(selector).style.display = 'block';
                    document.body.style.overflow = "hidden";
                    addMargin();
                }
            });
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

    window.addEventListener('scroll', showModalByScroll);

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

    showModalByTime ('.popup-consultation', 60000);
};

export default modals;