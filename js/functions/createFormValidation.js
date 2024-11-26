export function createFormValidation() {
    console.log(1)
    /*const forms = document.querySelectorAll('.js-form');

    forms.forEach(form => {
        const inputs = form.querySelectorAll('.js-input-wrapper');
        const submitButton = form.querySelector('.js-submit-button');

        inputs.forEach(input => {
            const field = input.querySelector('.js-input');

            field.addEventListener('input', () => validateInput(input));
            field.addEventListener('change', () => {
                field.classList.add('touched');
                validateInput(input);
            });
        });

        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            validateAllInputs(inputs);
            checkAllFieldsValid(inputs);
        });
    });*/
}

function validateInput(input) {
    const field = input.querySelector('.js-input');
    const value = field.value.trim();
    const isRequired = input.classList.contains('required');
    const inputType = input.getAttribute('data-input-type');
    const isEmpty = inputType === 'select' ? value === 'Не выбран' : value === '';

    clearErrorClasses(input);

    if (isEmpty && isRequired) {
        input.classList.add('error');
    } else {
        field.classList.add('touched');
        handleInputValidation(input, inputType, value);
    }
}

function clearErrorClasses(input) {
    input.classList.remove('error', 'email-error', 'phone-error', 'rules-error');
}

function handleInputValidation(input, inputType, value) {
    const field = input.querySelector('.js-input');

    if (inputType === 'firstLetterUppercase') {
        const newValue = firstLetterUppercase(value);

        if (newValue !== value) {
            field.value = newValue;
        }
    }

    const validationRules = {
        organizationName: validateOrganizationName,
        localityName: validateLocalityName,
        email: validateEmail,
        phone: (val) => validatePhone(val, field.classList.contains('js-city-phone-number')),
    };

    const validate = validationRules[inputType];

    if (validate && !validate(value)) {
        input.classList.add('error', 'rules-error');
    }
}


function validateAllInputs(inputs) {
    inputs.forEach(input => validateInput(input));
}

function checkAllFieldsValid(inputs) {
    const allValid = Array.from(inputs).every(input => !input.classList.contains('error'));

    if (allValid) {
        // TODO: Здесь доделать функционал отправки формы в Битрикс. Убрать alert ниже.
        alert('Функционал отправки формы находится в разработке.');
        clearFormFields(inputs);
    }
}

function clearFormFields(inputs) {
    inputs.forEach(input => {
        const field = input.querySelector('.js-input');
        const label = input.querySelector('.label');
        field.value = '';
        field.classList.remove('touched');
        if (label && label.classList.contains('active')) {
            label.classList.remove('active')
        }
    });
    clearMarkRadio();
    clearSelect();
}
