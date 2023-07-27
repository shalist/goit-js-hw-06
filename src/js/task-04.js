let counterValue = 0;

const upBtn = document.querySelector("#counter").lastElementChild;
const downBtn = document.querySelector("#counter").firstElementChild;
const totalValue = document.querySelector("#value");

upBtn.addEventListener("click", handlerUp);
downBtn.addEventListener("click", handlerDown);

function handlerUp() {
    counterValue += 1;
    totalValue.textContent = counterValue;
}

function handlerDown() {
    counterValue -= 1;
    totalValue.textContent = counterValue;
}