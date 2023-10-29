const titleService = document.getElementById('title');
const descriptionService = document.getElementById('description');
const priceService = document.getElementById('price');
const imgService = document.getElementById('img');
const btnUpServ = document.getElementById('btn-up-Serv');


const params = window.location.pathname;
const idPestaña = params.split('/')[2];

const getOnlyPestañaById = async (id) => {
    const idPestañas = await fetch(`http://localhost:3200/api/pestana/${id}`, {
        method: 'GET',
    });
    const resultData = await idPestañas.json();
    console.log(resultData);
    return resultData;
}


const updatePestaña = async (id, changeServicio) => {
    const pestañaData = await fetch(`http://localhost:3200/api/pestana/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(changeServicio)
    })
    const resultUpdateData = await pestañaData.json();
    console.log(resultUpdateData);
    return resultUpdateData; 
}

document.addEventListener('DOMContentLoaded', () => {
    getOnlyPestañaById(idPestaña)
    .then((returnid) => {
        titleService.value = returnid.message.title;
        descriptionService.value = returnid.message.description;
        priceService.value = returnid.message.price;
        // imgService.value = returnidEyebrow.message.img;
        
    })
    .catch((error) => console.error(error));
})

btnUpServ.addEventListener('click', () => {
    const tileServiceUpdate = titleService.value;
    const descriptionServiceUpdate = descriptionService.value;
    const priceServiceUpdate = priceService.value;
    // const imgServiceUpdate = imgService.value;

    const changeServicio = {
        title: tileServiceUpdate,
        description: descriptionServiceUpdate,
        price: priceServiceUpdate,
        // img: imgServiceUpdate
    }

    console.log(changeServicio);

    updatePestaña(idPestaña, changeServicio)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
})

