import {clientServices} from "../js/services/client-services.js"

const form = document.querySelector('#form__add--product');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = document.querySelector('#url').value;
    const name = document.querySelector('#name');
    const price = document.querySelector('#price').value;
    const comments = document.querySelector('#comments');
    const radio1 = document.querySelector('#action');
    const radio2 = document.querySelector('#strategy');
    const radio3 = document.querySelector('#shooter');

    const maxNameLength = 20;
    const maxCommentsLength = 150;

    if (name.value.length > maxNameLength) {
        alert ('El nombre no puede superar los 20 caracteres');
        name.style.border = "4px solid red";
        return
    };
    if (comments.value.length > maxCommentsLength) {
        alert ('Los comentarios no pueden superar los 150 caracteres');
        comments.style.border = "4px solid red";
        return
    };
    if (radio1.checked) {
        clientServices.madeCard (url, name.value, price, comments.value, radio1.value);
    }
     else {
        if (radio2.checked) {
            clientServices.madeCard (url, name.value, price, comments.value, radio2.value);
        }
        else {
            clientServices.madeCard (url, name.value, price, comments.value, radio3.value);
        }
    }
     
});