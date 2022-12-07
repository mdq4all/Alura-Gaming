const listProducts = () => fetch('http://localhost:3000/perfil').then((respuesta) => respuesta.json());

const madeCard = (url,name,price,comments,genre) => {
    return fetch('http://localhost:3000/perfil',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({url,name,price,comments,genre,id: uuid.v4()})
    });
};

export const clientServices = {
    madeCard,
    listProducts
}
