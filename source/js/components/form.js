const first = document.body.querySelector('.form__first');
const second = document.body.querySelector('.form__second');
const next = first.querySelector('button');
const back = second.querySelector('button');
const submit = second.querySelector('button[type="submit"]');
const checkbox = second.querySelector('input[type="checkbox"]');

const checkInputs = (elements, checks) => {
    elements.forEach((element) => {
        const errorMessage = element.parentElement.querySelector('span');

        if (errorMessage && !errorMessage.classList.contains('none')) {
            errorMessage.classList.add('none');
        };

        if (element.value && element.value !== '') {
            checks.push(element.value);
        } else {
            errorMessage.classList.remove('none');
        }
    });
}

const setForm = () => {
    second.classList.add('hidden');

    next.addEventListener('click', () => {
        const inputs = first.querySelectorAll('input');
        const values = [];

        checkInputs(inputs, values);

        if (values.length === inputs.length) {
            first.classList.add('hidden');
            second.classList.remove('hidden');
        }
    });

    back.addEventListener('click', () => {
        first.classList.remove('hidden');
        second.classList.add('hidden');
    });

    submit.addEventListener('click', (evt) => {
        evt.preventDefault();

        const inputs = second.querySelectorAll('input');
        const values = [];

        checkInputs(inputs, values);

        if (values.length === inputs.length && checkbox.checked) {
            second.classList.add('hidden');
            document.querySelector('.form__text h2').textContent = 'Спасибо за регистрацию!';
            document.querySelector('.form__text h2').style.marginBottom = '0';
            document.querySelector('.form__text h2').style.textAlign = 'center';
            document.querySelector('.form__text p').remove();
        }

        if (values.length === inputs.length && !checkbox.checked) {
            checkbox.parentElement.querySelector('label').style.color = 'red';
        }
    })
}

export { setForm }
