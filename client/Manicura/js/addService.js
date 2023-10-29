const titleService = document.getElementById('title');
const descriptionService = document.getElementById('description');
const descriptionService2 = document.getElementById('description2');
const priceService = document.getElementById('price');
const imgService = document.getElementById('img');
const btnAddServ = document.getElementById('btn-add-Serv');
const ventanaEmergente = document.getElementById('container-emergente');

const saveNewService = async (manicura) => {
    const manicuraData = await fetch('http://localhost:3200/api/manicure', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(manicura)
    })
const newService = await manicuraData.json();
console.log(newService);
return newService;
}

btnAddServ.addEventListener('click', () => {
    const manicuraValues= {
        title: titleService.value,
        description: descriptionService.value,
        description2: descriptionService2.value,
        price: priceService.value,
        img: imgService.value
    }
    saveNewService(manicuraValues)
    .then((response) => {
        ventanaEmergente.style.display="block";
        ventanaEmergente.style.display="grid";
    })
    .catch((error) => console.log(error))
})