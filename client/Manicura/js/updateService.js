const titleService = document.getElementById('title');
const descriptionService = document.getElementById('description');
const descriptionService2 = document.getElementById('description2');
const priceService = document.getElementById('price');
const imgService = document.getElementById('img');
const btnUpServ = document.getElementById('btn-up-Serv');
const btnServCart = document.getElementById('sing-serv-cart');

const params = window.location.pathname;
const idManicura = params.split('/')[2];


const getOnlyManicuraById = async (id) => {
    const idManicuras = await fetch(`http://localhost:3200/api/manicure/${id}`, {
        method: 'GET',
    });
    const resultData = await idManicuras.json();
    console.log(resultData);
    return resultData;

}


const updateManicura = async (id, changeServicio) => {
    const manicuraData = await fetch(`http://localhost:3200/api/manicure/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(changeServicio)
    })
    const resultUpdateData = await manicuraData.json();
    console.log(resultUpdateData);
    return resultUpdateData; 
}

document.addEventListener('DOMContentLoaded', () => {
    getOnlyManicuraById(idManicura)
    .then((returnid) => {
        titleService.value = returnid.message.title;
        descriptionService.value = returnid.message.description;
        descriptionService2.value = returnid.message.description2;
        priceService.value = returnid.message.price;
        // imgService.value = returnidEyebrow.message.img;
        
    })
    .catch((error) => console.error(error));
})

btnUpServ.addEventListener('click', () => {
    const tileServiceUpdate = titleService.value;
    const descriptionServiceUpdate = descriptionService.value;
    const descriptionServiceUpdate2 = descriptionService2.value;
    const priceServiceUpdate = priceService.value;
    // const imgServiceUpdate = imgService.value;

    const changeServicio = {
        title: tileServiceUpdate,
        description: descriptionServiceUpdate,
        description2: descriptionServiceUpdate2,
        price: priceServiceUpdate,
        // img: imgServiceUpdate
    }

    console.log(changeServicio);

    updateManicura(idManicura, changeServicio)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
})



   




 

