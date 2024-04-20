document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('form');
    let inputs = document.querySelectorAll('input');
    let errorMessages = document.querySelectorAll('span');

    form.addEventListener('submit', function(event) {
        event.preventDefault();   // Prevents form submission

        // Check if any input is invalid
        let isValid = true;
        inputs.forEach(function(input, index) {    // index is the element's position in the DOM
            if (!input.checkValidity()) {
                isValid = false;
                errorMessages[index].textContent = "* This field is required";
                errorMessages[index].classList.add('show-error');
            } else {
                errorMessages[index].textContent = ""; // Clear previous error messages
                errorMessages[index].classList.remove('show-error');
            }
        });

        // If form is valid, submit it
        if (isValid) {
            form.submit();
        }
    });
});