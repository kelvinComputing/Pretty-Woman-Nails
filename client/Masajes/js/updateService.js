const titleService = document.getElementById('title');
const descriptionService = document.getElementById('description');
const descriptionService2 = document.getElementById('description2');
const descriptionService3 = document.getElementById('description3');
const descriptionService4 = document.getElementById('description4');
const descriptionService5 = document.getElementById('description5');
const priceService = document.getElementById('price');
const imgService = document.getElementById('img');
const btnUpServ = document.getElementById('btn-up-Serv');


const params = window.location.pathname;
const idMasaje = params.split('/')[2];

const getOnlyMasajeById = async (id) => {
    const idMasajes = await fetch(`http://localhost:3200/api/masajes/${id}`, {
        method: 'GET',
    });
    const resultData = await idMasajes.json();
    console.log(resultData);
    return resultData;
}


const updateMasaje = async (id, changeServicio) => {
    const masajeData = await fetch(`http://localhost:3200/api/masajes/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(changeServicio)
    })
    const resultUpdateData = await masajeData.json();
    console.log(resultUpdateData);
    return resultUpdateData; 
}

document.addEventListener('DOMContentLoaded', () => {
    getOnlyMasajeById(idMasaje)
    .then((returnid) => {
        titleService.value = returnid.message.title;
        descriptionService.value = returnid.message.description;
        descriptionService2.value = returnid.message.description;
        descriptionService3.value = returnid.message.description;
        descriptionService4.value = returnid.message.description;
        descriptionService5.value = returnid.message.description;
        priceService.value = returnid.message.price;
        // imgService.value = returnidEyebrow.message.img;
        
    })
    .catch((error) => console.error(error));
})

btnUpServ.addEventListener('click', () => {
    const tileServiceUpdate = titleService.value;
    const descriptionServiceUpdate = descriptionService.value;
    const descriptionServiceUpdate2 = descriptionService2.value;
    const descriptionServiceUpdate3 = descriptionService3.value;
    const descriptionServiceUpdate4 = descriptionService4.value;
    const descriptionServiceUpdate5 = descriptionService5.value;
    const priceServiceUpdate = priceService.value;
    // const imgServiceUpdate = imgService.value;

    const changeServicio = {
        title: tileServiceUpdate,
        description: descriptionServiceUpdate,
        description2: descriptionServiceUpdate2,
        description3: descriptionServiceUpdate3,
        description4: descriptionServiceUpdate4,
        description5: descriptionServiceUpdate5,
        price: priceServiceUpdate,
        // img: imgServiceUpdate
    }

    console.log(changeServicio);

    updateMasaje(idMasaje, changeServicio)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
})

