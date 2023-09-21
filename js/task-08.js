const formEl = document.querySelector('.login-form');
const inputEm = document.querySelector('input[name="email"]');
const inputPas = document.querySelector('input[name="password"]');
const buttonEl = document.querySelector('button[type="submit"]');

formEl.addEventListener('submit', formElSubmit)

function formElSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === ""|| password ==="") {
        return alert ('Please fill in this field');
    }

    const formObject = {
        email,
        password,
    }
    console.log(formObject);
        formEl.reset();
}
