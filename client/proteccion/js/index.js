const servicesContainer = document.querySelector('.service-proteccion');
const ventanaEmergente = document.getElementById('container-emergente');

const listProteccionServices = async () => {
  const getData = await fetch('http://localhost:3200/api/proteccion');
  const getDataResult = await getData.json();

  return getDataResult;
}

const deleteProteccion = async (id) => {
  const deleteProteccionData = await fetch(`http://localhost:3200/api/proteccion/${id}`, {
    method: 'DELETE',
  });
  const deleteSuccess = await deleteProteccionData.json();
  return deleteSuccess;
}

window.addEventListener('DOMContentLoaded', () => {
    listProteccionServices()
    .then((data) => {

      console.log(data.message);

      const buttons = () => ` 
        
        <button class="update" id="btnes">Update</button>
        <button class="delete" id="btnes">Delete</button>
          `

      const proteccion = data.message.map((proteccionList) => {
        return `
        <div class="service" id="${proteccionList.id}">
          <div class="proteccion">
            <div class="proteccion-img">
              <div class="img">
                <img src="${proteccionList.proteccion.img}" alt="" />
              </div>
            </div>
            <div class="proteccion-inf">
              <div class="inf">
                <h3>${proteccionList.proteccion.title}</h3>
                <p>${proteccionList.proteccion.description}</p>
                <p>${proteccionList.proteccion.description2}</p>
                <p>${proteccionList.proteccion.description3}</p>
                <p>${proteccionList.proteccion.description4}</p>
                <p>${proteccionList.proteccion.description5}</p>
                <h4>${proteccionList.proteccion.price}$</h4>
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

      servicesContainer.innerHTML = proteccion;

    })
})

servicesContainer.addEventListener('click', e => {

  let idServ;

  if(e.target.closest('.update')) {
    idServ = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    console.log(idServ);
    window.location.pathname= `/proteccion/${idServ}`;
  }

  if (e.target.closest('.delete')) {
  idServ = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
  console.log(idServ);
  deleteProteccion(idServ)
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