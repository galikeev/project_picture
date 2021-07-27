const pictureSize = (imgSelector) => {

    const blocks = document.querySelectorAll(imgSelector);

    function showImg (block) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -4) + '-1.png'; /* Вырезаем в пути картинки последние 4 символа и приписываем -1.png */
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => { /* все параграфы в блоке, кроме с классом .sizes-hit */
            p.style.display = 'none'; /* скрываем */
        });
    }

    function hideImg (block) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -6) + '.png'; /* Вырезаем в пути картинки последние 6 символов и приписываем .png */
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => { /* все параграфы в блоке, кроме с классом .sizes-hit */
            p.style.display = 'block'; /* показываем */
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => { /* Когда над элементом */
            showImg(block);
        });
        block.addEventListener('mouseout', () => { /* Когда уходит с элемента */
            hideImg(block);
        });
    });

};

export default pictureSize;