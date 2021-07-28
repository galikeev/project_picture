const scrolling = (upSelector) => {

    const upElem = document.querySelector(upSelector); /* получаем кнопку вверх */

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) { /* если прокрученное расстояние больше 1650 пикселей */
            upElem.classList.add('animated', 'fadeIn'); /* то показываем кнопку вверх с анимацией */
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut'); /* скрываем кнопку вверх с анимацией */
            upElem.classList.remove('fadeIn'); 
        }
    });

    /* Скролл с помощью requestAnimationFrame */
    let links = document.querySelectorAll('[href^="#"]'), /* получаем все ссылки, которые начинаются с # (хэш) */
        speed = 0.2; /* переменная отвечает за скорость */
    
    links.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            let heightTop = document.documentElement.scrollTop, /* прокрученное расстояние */
                hash = this.hash, /* текущий хэш (#) */
                toBlock = document.querySelector(hash).getBoundingClientRect().top, /* верхняя граница  */
                start = null; /* стартовая позиция */

            requestAnimationFrame(step);

            function step(time) { /* аргумент будет передаваться автоматически */
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(heightTop - progress/speed, heightTop + toBlock) : Math.min(heightTop + progress/speed, heightTop + toBlock)); /* отвечает за количество пикселей, которые необходимо пролистать в течение анимации */
                document.documentElement.scrollTo(0, r);

                if (r != heightTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });


    /* Скролл на чистом JS */
    // const element = document.documentElement,
    //       body = document.body;

    // const calcScroll = () => {
    //     upElem.addEventListener('click', function(event) {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop); /* Узнаем какое расстояние было пролистано вниз*/

    //         if (this.hash !== '') { /* Если текущий хэш(#) не пустой */
    //             event.preventDefault(); /* То отменяем стандартное поведение браузера */
    //             let hashElement = document.querySelector(this.hash),
    //                 hashElementTop = 0; /* Родительский элемент */

    //             while (hashElement.offsetParent) { 
    //                 hashElementTop += hashElement.offsetTop;
    //                 hashElement = hashElement.offsetParent;
    //             }

    //             hashElementTop = Math.round(hashElementTop);
    //             smoothScroll(scrollTop, hashElementTop, this.hash);
    //         }
    //     });
    // };

    // const smoothScroll = (from, to, hash) => { /* аргументы (откуда, куда и текущий хэш) */
    //     let timeInterval = 1, /* время, через которое будет производиться анимация */
    //         prevScrollTop, /* предшествующее значение */
    //         speed; /* с какой скоростью будет происходить анимация */

    //     if (to > from) { /* если куда больше, чем откуда (то есть сверху вниз) */
    //         speed = 30; 
    //     } else { /* если снизу вверх */
    //         speed = -30;
    //     }

    //     let move = setInterval(function() {
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

    //         if (
    //             prevScrollTop === scrollTop ||
    //             (to > from && scrollTop >= to) ||
    //             (to < from && scrollTop <= to)
    //         ) {
    //             clearInterval(move);
    //             history.replaceState(history.state, document.title, location.href.replace(/#.*/g, '') + hash);
    //         } else {
    //             body.scrollTop += speed;
    //             element.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);
    // };
    // calcScroll();
};

export default scrolling;