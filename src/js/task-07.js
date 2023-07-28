const fontSizer = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizer.addEventListener('input', handlerSize);

function handlerSize(evt) {
    text.style.fontSize = `${evt.target.value}px`;
};
