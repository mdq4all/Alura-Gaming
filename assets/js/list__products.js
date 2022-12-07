import { clientServices } from "./services/client-services.js";

const addCard = (url, name, price, genre) => {
    const li = document.createElement('li');
    li.className = "card";
    const content = `
    <img src= ${url} alt="image_${name}" class="card__image">
    <h3 class="title__card text__card_container">${name}</h3>
    <p class="price__card text__card_container">$ ${price}</p>`;
    li.innerHTML = content;
    return li
};

const accion = document.querySelector('#accion__lista');
const shooter = document.querySelector('#shooter__lista');
const estrategia = document.querySelector('#estrategia__lista');

clientServices.listProducts().then ((data) => {
    
    const maxShooter = 6;
    const maxAction = 6;
    const maxStrategy = 6;
    let contShooter = 0;
    let contAction = 0;
    let contStrategy = 0;

    data.forEach(({url, name, price, genre}) => {
        
        if ((genre === 'accion') && (contAction < maxAction)) {
            accion.appendChild(addCard(url, name, price, genre));
            contAction++;
        }
        if ((genre === 'estrategia')  && (contStrategy < maxStrategy)) {
                estrategia.appendChild(addCard(url, name, price, genre));
                contStrategy++;
        }
        if ((genre === 'shooter')  && (contShooter < maxShooter)) {

            shooter.appendChild(addCard(url, name, price, genre));
            contShooter++;
        }
    });
});