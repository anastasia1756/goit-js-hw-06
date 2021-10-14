const getColorEl = document.querySelector(".color");
const btnEl = document.querySelector("button");
const bodyEl = document.querySelector("body");

btnEl.addEventListener('click', onChangeColor);

function onChangeColor () {
  bodyEl.style.backgroundColor = getRandomHexColor();
  getColorEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
