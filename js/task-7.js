const inputRef = document.querySelector(`#font-size-control`);
const textRangeRef = document.querySelector(`#text`);
//start fontSize
textRangeRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener('input', event => {
    textRangeRef.style.fontSize = `${event.target.value}px`;
});

