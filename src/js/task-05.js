const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener('input', handler);

function handler(evt) {
    if (input.value === "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = evt.currentTarget.value;
    }
}