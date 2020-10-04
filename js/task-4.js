const btnDecRef = document.querySelector('button[data-action="decrement"]');
const btnIncRef = document.querySelector('button[data-action="increment"]');
let counterValue = document.querySelector('#value');

const onDecrementBtnClick = () =>
  (counterValue.textContent = Number(counterValue.textContent) - 1);
const onIncrementBtnClick = () =>
  (counterValue.textContent = Number(counterValue.textContent) + 1);

btnDecRef.addEventListener('click', onDecrementBtnClick);
btnIncRef.addEventListener('click', onIncrementBtnClick);
