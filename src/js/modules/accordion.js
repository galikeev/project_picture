const accordion = (triggerSelector) => {

    const trigger = document.querySelectorAll(triggerSelector);

    trigger.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('ui-accordion-header-active')) {
                showContent(btn);
            } else {
                hideContent();
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