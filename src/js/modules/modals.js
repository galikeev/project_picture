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
                btnPressed = true; /* Означает, что нажали на какой-то из триггеров  */
                /* Удаляем/скрываем триггер при открытии окна, если в вызове стоит true */
                if (deleteTrigger == true) {
                    item.style.display = 'none';
                    // item.remove();
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
        modal.addEventListener('click', (e) => {
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
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                document.querySelector(selector).click(); /* Имитирует клик (как будто кликнули по этому элементу) */
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

export default modals;