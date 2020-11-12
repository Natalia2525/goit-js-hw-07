const decrementRef = document.querySelector(`button[data-action="decrement"]`);
const incrementRef = document.querySelector(`button[data-action="increment"]`);
const ValueRef = document.querySelector(`#value`);

let counterValue = 0;

function decrement () {
    counterValue -= 1;
   render();
};

function increment () {
    counterValue += 1;
    render();
};

function render () {
    ValueRef.textContent = counterValue;
};

decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);