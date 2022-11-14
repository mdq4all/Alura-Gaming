function validateForm (event) {
    event.preventDefault();
    const name = document.querySelector('#name');
    const text = document.querySelector('#text');
    if (name.value === '' && text.value === '')
         return
    else {
        alert (`Formulario enviado ${name.value} - ${text.value}`);
        name.value = '';
        text.value = '';
    }
}

const button = document.querySelector('#button__contact');
button.addEventListener('click', validateForm); 