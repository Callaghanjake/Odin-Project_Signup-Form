// Variable to select the HTML form.
let form = document.querySelector('.signup-form');

// Event listener attached to form variable
form.addEventListener('submit', (event) => {
    // On form submit create variables for password inputs and validate span
    let password = document.querySelector('.password-input').value;
    let passwordConfirm = document.querySelector('.password-confirm-input').value;
    let inputNotice = document.querySelector('.input-notice');

    // If the passwords are empty or do not match prevent form submit and validate
    if (password === passwordConfirm && password !== '') {
        return true;
    } else if (password != passwordConfirm) {
        event.preventDefault();
        inputNotice.classList.add('password-notice');
        inputNotice.textContent = 'The passwords do not match';
    } else if (password == '' || passwordConfirm == '') {
        event.preventDefault();
        inputNotice.classList.add('password-notice');
        inputNotice.textContent = 'The password field is empty';
    }
});