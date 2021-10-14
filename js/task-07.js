const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener("input", (event) => {
    let num = event.currentTarget.value;
    num += 'px';
    textEl.style.fontSize = num;
});