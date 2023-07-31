const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        alert('Всі поля повинні бути заповнені!');
        return;
    } else {
        const objectForConsole = {
            email: email.value,
            password: password.value
        }
        console.log(objectForConsole);
    }
    form.reset();
}




