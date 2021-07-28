const accordion = (triggerSelector) => {

    const trigger = document.querySelectorAll(triggerSelector);

    trigger.forEach(btn => { /* перебираем все кнопки */
        btn.addEventListener('click', function() { /* на каждую кнопку вешаем клик */
            if (!this.classList.contains('ui-accordion-header-active')) { /* если у текущей кнопки нет класс активности */
                showContent(btn); /* то вызываем функцию по открытию */
            } else {
                hideContent(); /* иначе закрываем */
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

export default accordion;