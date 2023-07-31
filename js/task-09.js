function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const bodyEl = document.body;
const spnColor = document.querySelector('.color')


btnEl.addEventListener('click', handlerBackgroundColor);

function handlerBackgroundColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spnColor.textContent = bodyEl.style.backgroundColor
}
