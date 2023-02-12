let form = document.getElementById('sign-up-form');
let passwordError = document.getElementById('password-error');

form.addEventListener('keydown', () => {
    passwordError.style.display = 'none';
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let password = e.target[4].value;
    let passwordConfirm = e.target[5].value;

    if(password !== passwordConfirm) {
        passwordError.textContent = "Passwords do not match";
        passwordError.style.display = 'inline';
    }
})