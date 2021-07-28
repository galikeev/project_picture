const hamburger = (hamburgerSelector, menuSelector, menuItemSelector) => {

    const burger = document.querySelector(hamburgerSelector),
          menu = document.querySelector(menuSelector),
          menuItem = document.querySelectorAll(menuItemSelector);
          
    menu.style.display = 'none'; /* изначально скрываем гамбургер меню */

    burger.addEventListener('click', () => { /* вешаем клик на гамбургер */
        if (menu.style.display == 'none' && window.screen.availWidth < 993) { /* если гамбургер меню скрыто и ширина меньше 993 */
            menu.classList.add('animated', 'fadeIn');
            menu.style.display = 'block'; /* то показывем гамбургер меню */
        } else {
            menu.style.display = 'none'; /* если условия не выполнились, то скрываем */
        }
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => { /* при клике на каждый пункт из гамбургер меню, скрываем гмбургер меню */
            menu.style.display = 'none';
        });
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) { /* если ширина экрана станет больше 992, то скрываем гамбургер меню */
            menu.style.display = 'none';
        }
    });

};

export default hamburger;