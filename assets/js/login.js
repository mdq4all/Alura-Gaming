const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const pass = document.querySelector('#password').value;
    const emailAdmin = 'mdq4all@gmail.com';
    const passAdmin = '123456';

    if (email === emailAdmin && pass === passAdmin) 
        window.location.href = 'menuadmin.html';
    else email !== emailAdmin ? alert ('email no registrado') : alert ('password incorrecto');
})