const titleService = document.getElementById('title');
const descriptionService = document.getElementById('description');
const priceService = document.getElementById('price');
const imgService = document.getElementById('img');
const btnUpServ = document.getElementById('btn-update-Serv');
const ventanaEmergente = document.getElementById('container-emergente');


const params = window.location.pathname;
const idEyebrow = params.split('/')[3];

const getOnlyEyebrowById = async (id) => {
    const idEyebrows = await fetch(`http://localhost:3200/api/cejas/${id}`, {
        method: 'GET',
    });
    const resultData = await idEyebrows.json();
    console.log(resultData);
    return resultData;

}


const updateEyebrows = async (id, changeServicio) => {
    const eyebrowData = await fetch(`http://localhost:3200/api/cejas/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(changeServicio)
    })
    const resultUpdateData = await eyebrowData.json();
    console.log(resultUpdateData);
    return resultUpdateData;
}

document.addEventListener('DOMContentLoaded', () => {
    getOnlyEyebrowById(idEyebrow)
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

    updateEyebrows(idEyebrow, changeServicio)
        .then(() => {
            ventanaEmergente.style.display="block";
            ventanaEmergente.style.display="grid";
        })
        .catch((error) => console.log(error));
})