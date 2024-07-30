let form = document.querySelector('.signup-form');


form.addEventListener('submit', (event) => {
    let password = document.querySelector('.password-input').value;
    let passwordConfirm = document.querySelector('.password-confirm-input').value;

    if (password === passwordConfirm) {
        console.log('Passwords fine');
        return true;
    } else if (password != passwordConfirm) {
        event.preventDefault();
        console.log('Passwords dont match')
    } else if (password == '' || passwordConfirm == '') {
        event.preventDefault();
        console.log('Passwords empty');
    }
});