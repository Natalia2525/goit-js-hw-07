const inputRef = document.querySelector(`#controls input`);
const createBtnRef = document.querySelector(`[data-action="render"]`);
const deleteBtnRef = document.querySelector(`[data-action="destroy"]`);
const boxesRef = document.querySelector('#boxes');

const createBoxes = (amount) => {
    const randColor = () => Math.floor(Math.random() * 255);
    for (let i = 0, starSize = 30; i < amount; i += 1, starSize += 10) {
        const box = document.createElement('div');
        box.style.width = `${starSize}px`;
        box.style.height = `${starSize}px`;
        box.style.backgroundColor = `rgb(${randColor()},${randColor()},${randColor()})`;
        boxesRef.append(box);
    }
};
const createValue = () => createBoxes(inputRef.value);
createBtnRef.addEventListener('click', createValue);

const destroyBoxes = () => {
  inputRef.value = 0;
  boxesRef.innerHTML = '';
};

deleteBtnRef.addEventListener('click', destroyBoxes);
