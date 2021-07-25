import {getResource} from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {

    const btn = document.querySelector(trigger);

    // const cards = document.querySelectorAll(cards);
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
    btn.addEventListener('click', function() {
        getResource('assets/db.json')
            .then(res => createCards(res.styles))
            .catch(() => showError());

        setTimeout(() => {
            this.remove();
        }, 100);
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
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

export default showMoreStyles;