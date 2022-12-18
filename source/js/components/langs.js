const langs = document.body.querySelectorAll('.header__langs button');

const setLangs = () => {
    langs.forEach((lang) => {
        lang.addEventListener('click', () => {
            langs.forEach((item) => {
                item.classList.remove('langs__active');
            });

            lang.classList.add('langs__active');
        });
    });
}

export {setLangs}
