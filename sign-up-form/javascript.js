document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('form');
    let inputs = document.querySelectorAll('input');
    let submitButton = document.querySelector('button');
    let errorMessages = document.querySelectorAll('span');

    form.addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();

        // Check if any input is invalid
        let isValid = true;
        inputs.forEach(function(input, index) {
            if (!input.checkValidity()) {
                isValid = false;
                errorMessages[index].textContent = "* This field is required";
                errorMessages[index].classList.add('show-error');
            } else {
                errorMessages[index].textContent = ""; // Clear previous error message
                errorMessages[index].classList.remove('show-error');
            }
        });

        // If form is valid, submit it
        if (isValid) {
            form.submit();
        }
    });
});