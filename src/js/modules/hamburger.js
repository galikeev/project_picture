const hamburger = (hamburgerSelector, menuSelector, menuItemSelector) => {

    const burger = document.querySelector(hamburgerSelector),
          menu = document.querySelector(menuSelector),
          menuItem = document.querySelectorAll(menuItemSelector);
          
    menu.style.display = 'none';

    burger.addEventListener('click', () => {
        if (menu.style.display == 'none' && window.screen.availWidth < 993) {
            menu.classList.add('animated', 'fadeIn');
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.style.display = 'none';
        });
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menu.style.display = 'none';
        }
    });

};

export default hamburger;