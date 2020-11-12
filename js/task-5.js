const inputRef = document.querySelector(`#name-input`);

const nameRef = document.querySelector(`#name-output`);
function changeName(event) {
     nameRef.textContent = event.target.value || `незнакомец`;
 }

inputRef.addEventListener('input', changeName);