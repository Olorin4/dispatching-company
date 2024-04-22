let form = document.querySelector('form');
let inputs = document.querySelectorAll('input');
let errorMessages = document.querySelectorAll('span');
let password1 = document.querySelector('#password');
let password2 = document.querySelector('#confirm-pwd');
let passwordError = document.querySelector('.password :last-child:not([class]):not([id])');

function showError(element, message) {
    element.textContent = message;
    element.classList.add('show-error');
}

function hideError(element) {
    element.textContent = "";
    element.classList.remove('show-error');
}

function validateInputs() {
    let isValid = true;
    inputs.forEach(function(input, index) {
        if (!input.checkValidity()) {
            showError(errorMessages[index], "* This field is required");
            isValid = false;
        } else {
            hideError(errorMessages[index]);
        }
    });
    return isValid;
}

function validatePasswords() {
    let isValid = true;
    if (password1.value !== password2.value) {
        showError(passwordError, "* Passwords do not match");
        isValid = false;
    } else if (password1.value !== "") {
        hideError(passwordError);
    }
    return isValid;
}

form.addEventListener('submit', function(event) {
    event.preventDefault();   // Prevents form submission

    let isInputsValid = validateInputs();
    let isPasswordsValid = validatePasswords();

    if (isInputsValid && isPasswordsValid) {
        form.submit();
    } else {
        form.classList.add('show-error');
    }
});

