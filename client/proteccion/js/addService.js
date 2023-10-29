const titleService = document.getElementById('title');
const descriptionService = document.getElementById('description');
const descriptionService2 = document.getElementById('description2');
const descriptionService3 = document.getElementById('description3');
const descriptionService4 = document.getElementById('description4');
const descriptionService5 = document.getElementById('description5');
const priceService = document.getElementById('price');
const imgService = document.getElementById('img');
const btnAddServ = document.getElementById('btn-add-Serv');
const ventanaEmergente = document.getElementById('container-emergente');

const saveNewService = async (masaje) => {
    const proteccionData = await fetch('http://localhost:3200/api/proteccion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(masaje)
    })
const newService = await proteccionData.json();
console.log(newService);
return newService;
}

btnAddServ.addEventListener('click', () => {
    const proteccionValues= {
        title: titleService.value,
        description: descriptionService.value,
        description: descriptionService2.value,
        description: descriptionService3.value,
        description: descriptionService4.value,
        description: descriptionService5.value,
        price: priceService.value,
        img: imgService.value
    }
    saveNewService(proteccionValues)
    .then((response) => {
        ventanaEmergente.style.display="block";
        ventanaEmergente.style.display="grid";
    })
    .catch((error) => console.log(error))
})