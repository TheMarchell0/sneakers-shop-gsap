export function createFormValidation() {
    const body = document.body;
    const forms = document.querySelectorAll('.js-form');
    const successModal = document.querySelector('.js-modal');
    const closeButtons = successModal.querySelectorAll('.js-close-modal');

    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            closeModal()
        });
    });

    successModal.addEventListener('click', (event) => {
        if (event.target === successModal) {
            closeModal();
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && successModal.classList.contains('active')) {
            closeModal();
        }
    });

    forms.forEach(form => {
        const inputs = form.querySelectorAll('.js-form-item');
        const submitButton = form.querySelector('.js-submit-button');

        inputs.forEach((input) => {
            const field = input.querySelector('.js-input');

            field.addEventListener('input', () => {
                validateInput(input);
            });

            field.addEventListener('change', () => {
                field.classList.add('touched');
            });
        });

        submitButton.addEventListener('click', (e) => {
            e.preventDefault();

            inputs.forEach(input => {
                validateInput(input);
            });

            checkAllFieldsValid(inputs);
        });
    });

    function validateEmail(email) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    function validateInput(input) {
        const isEmailField = input.classList.contains('js-email-input');
        const field = input.querySelector('.js-input');
        const isRequired = input.classList.contains('required');
        const value = field.value.trim();
        const isEmpty = value === '';

        input.classList.remove('error', 'email-error');

        if (isEmpty && isRequired) {
            input.classList.add('error');
        } else {
            field.classList.add('touched');

            if (isEmailField && !validateEmail(value)) {
                input.classList.add('error', 'email-error');
            }
        }
    }

    function checkAllFieldsValid(inputs) {
        let allValid = Array.from(inputs).every((input) => {
            return !input.classList.contains('error') && !input.classList.contains('email-error');
        });

        if (allValid) {
            openModal();
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
                label.classList.remove('active');
            }
        });
    }

    function openModal() {
        successModal.classList.add('active', 'modal-anim-open');
        lockScroll();
        successModal.classList.remove('modal-anim-close');
    }

    function closeModal(m) {
        if (successModal) {
            successModal.classList.replace('modal-anim-open', 'modal-anim-close');
            successModal.addEventListener('animationend', () => {
                successModal.classList.remove('active', 'modal-anim-close');
                unlockScroll();
            }, {once: true});
        }
    }

    function lockScroll() {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        body.style.paddingRight = `${scrollbarWidth}px`;
        body.classList.add('no-scroll');
    }

    function unlockScroll() {
        body.style.paddingRight = '';
        body.classList.remove('no-scroll');
    }
}
