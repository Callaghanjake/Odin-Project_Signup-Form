let form = document.querySelector('.signup-form');

form.addEventListener('submit', (event) => {
    let password = document.querySelector('.password-input').value;
    let passwordConfirm = document.querySelector('.password-confirm-input').value;
    let inputNotice = document.querySelector('.input-notice');

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