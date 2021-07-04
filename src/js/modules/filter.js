const filter = () => {

    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markNo = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

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
        if (e.target && e.target.tagName === 'LI') {
            items.forEach((btn) => btn.classList.remove('active'));
            e.target.classList.add('active');
        }


        let classSelect = e.target.classList[0];
        let allElems = wrapper.querySelectorAll(`.${classSelect}`);
        wrapper.style.justifyContent = 'center';
        
        if (classSelect == 'grandmother' || classSelect == 'granddad') {
            typeFilter();
        } else {
            typeFilter(allElems);
        }
        
    });



};

export default filter;