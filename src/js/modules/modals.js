import calcScroll from './calcScroll';

const modals = () => {
    
    let btnPressed = false;
    const scrollHide = calcScroll(),
          gift = document.querySelector('.fixed-gift');

    /* Функция отвечает за привязку модального окна к определенному тригеру */
    function bindModal(triggerSelector, modalSelector, closeSelector, triggerOff = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');
        
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                if (triggerOff == true) {
                    item.remove();
                }
                hideModal(windows);
                openModal(modal);
                addMargin(gift);
            });
        });

        close.addEventListener('click', () => {
            hideModal(windows);
            closeModal(modal);
            hideMargin(gift);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideModal(windows);
                closeModal(modal);
                hideMargin(gift);
            }
        });

    }

    function openModal(item) {
        item.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearInterval(showModalByTime);
    }

    function closeModal(item) {
        item.style.display = 'none';
        document.body.style.overflow = '';
    }
    /* При открытии нового модального окна старые будут закрываться */
    function hideModal(item) {
        item.forEach(elem => {
            elem.style.display = 'none';
            elem.classList.add('animated', 'fadeIn');
        });
    }

    function addMargin(item) {
        document.body.style.marginRight = `${scrollHide}px`;
        item.style.marginRight = `${scrollHide}px`;
    }

    function hideMargin(item) {
        document.body.style.marginRight = `0px`;
        item.style.marginRight = `0px`;
    }

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight && !btnPressed) {
            document.querySelector('.popup-gift').style.display = 'block';
            gift.remove();
            document.body.style.overflow = "hidden";
            addMargin(gift);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    const showModalByTime = setTimeout(() => {
        document.querySelector('.popup-consultation').style.display = 'block';
        document.body.style.overflow = "hidden";
        addMargin(gift);
    }, 60000);

    
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
};

export default modals;