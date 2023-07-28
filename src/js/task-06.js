const input = document.querySelector('input#validation-input');
const dataLength = document.querySelector('[data-length="6"]');

input.addEventListener('blur', handlerCheck);

function handlerCheck(evt) {
    if (evt.target.value.length === Number(dataLength.dataset.length)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}
