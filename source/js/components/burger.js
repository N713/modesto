const burger = document.body.querySelector('.burger');
const menu = document.body.querySelector('.header__nav');

const setBurger = () => {
    burger.addEventListener('click', (evt) => {
        evt.preventDefault();

        burger.classList.toggle('opened');
        menu.classList.toggle('closed');
    });
}

export {setBurger}
