const servicesContainer = document.querySelector('.service-masajes');
const ventanaEmergente = document.getElementById('container-emergente');


const listmasajesServices = async () => {
  const getData = await fetch('http://localhost:3200/api/Masajes');
  const getDataResult = await getData.json();

  return getDataResult;
}

const deleteMasaje = async (id) => {
  const deleteMasajeData = await fetch(`http://localhost:3200/api/masajes/${id}`, {
    method: 'DELETE',
  });
  const deleteSuccess = await deleteMasajeData.json();
  return deleteSuccess;
}

window.addEventListener('DOMContentLoaded', () => {
  listmasajesServices()
    .then((data) => {

      console.log(data.message);

      const buttons = () => ` 
        
        <button class="update" id="btnes">Update</button>
        <button class="delete" id="btnes">Delete</button>
          `

      const masajes = data.message.map((masajesList) => {
        return `
        <div class="service" id="${masajesList.id}">
          <div class="masajes">
            <div class="masajes-img">
              <div class="img">
              <img src="${masajesList.masajes.img}" alt="" />
              </div>
            </div>
            <div class="masajes-inf">
              <div class="inf">
                <h3>${masajesList.masajes.title}</h3>
                <p>${masajesList.masajes.description}</p>
                <p>${masajesList.masajes.description2}</p>
                <p>${masajesList.masajes.description3}</p>
                <p>${masajesList.masajes.description4}</p>
                <p>${masajesList.masajes.description5}</p>
                <h4>${masajesList.masajes.price}$</h4>
                <button class="sing-serv-cart" id="btnes">Agregar al Carrito</button>
                <div class="btn-update-Serv">
                  ${buttons()}
                </div>
              </div>
            </div>
          </div>
        </div>
        `
      }).join('');

      servicesContainer.innerHTML = masajes;

    })
})

servicesContainer.addEventListener('click', e => {

  let idServ;

  if(e.target.closest('.update')) {
    idServ = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    console.log(idServ);
    window.location.pathname= `/masajes/${idServ}`;
  }

  if (e.target.closest('.delete')) {
  idServ = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
  console.log(idServ);
  deleteMasaje(idServ)
  .then(() => {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    ventanaEmergente.style.display="block";
    ventanaEmergente.style.display="grid";
  })
  .catch((error) => console.error(error));
  }
})

const btnAdd = document.getElementById('btn-add-Serv');

btnAdd.addEventListener('click', () => {
  window.location.href= './addService.html';
})