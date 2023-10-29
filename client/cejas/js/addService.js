const titleService = document.getElementById('title');
const descriptionService = document.getElementById('description');
const priceService = document.getElementById('price');
const imgService = document.getElementById('img');
const btnAddServ = document.getElementById('btn-add-Serv');
const ventanaEmergente = document.getElementById('container-emergente');

const saveNewService = async (ceja) => {
    const cejaData = await fetch('http://localhost:3200/api/cejas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ceja)
    })
    const newService = await cejaData.json();
    console.log(newService);
    return newService;
}

btnAddServ.addEventListener('click', () => {
    const cejaValues = {
        title: titleService.value,
        description: descriptionService.value,
        price: priceService.value,
        img: imgService.value
    }
    saveNewService(cejaValues)
        .then((response) => {
            ventanaEmergente.style.display="block";
            ventanaEmergente.style.display="grid";
        })
        .catch((error) => console.log(error))
})