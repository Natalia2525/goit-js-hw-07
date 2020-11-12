const validRef = document.querySelector('#validation-input');

validRef.addEventListener('blur', validation);



function validation(event) {
    if (event.target.value.length === Number(event.target.dataset.length)) {
      
        validRef.classList.add('valid');
        validRef.classList.remove('invalid');
    } else {
        validRef.classList.add('invalid');
        validRef.classList.remove('valid');
    }
    
};


