const counterValue = document.querySelector('#value');
const incrementEl = document.querySelector('[data-action="increment"]');
const decrementEl = document.querySelector('[data-action="decrement"]');
let valueNumber = Number(counterValue.textContent);


incrementEl.addEventListener('click', () => {
    const incrementNum = valueNumber += 1;
    counterValue.textContent = incrementNum;
});
decrementEl.addEventListener('click', () => {
    const decrementNum = valueNumber -= 1;
    counterValue.textContent = decrementNum;
});
