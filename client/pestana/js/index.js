const servicesContainer = document.querySelector('.service-pestañas');
const ventanaEmergente = document.getElementById('container-emergente');

const listPestañasServices = async () => {
  const getData = await fetch('http://localhost:3200/api/pestana');
  const getDataResult = await getData.json();

  return getDataResult;
}

const deletePestaña = async (id) => {
  const deletePestañaData = await fetch(`http://localhost:3200/api/pestana/${id}`, {
    method: 'DELETE',
  });
  const deleteSuccess = await deletePestañaData.json();
  return deleteSuccess;
}

window.addEventListener('DOMContentLoaded', () => {
    listPestañasServices()
    .then((data) => {

      console.log(data.message);

      const buttons = () => ` 
        
        <button class="update" id="btnes">Update</button>
        <button class="delete" id="btnes">Delete</button>
          `

      const pestañas = data.message.map((pestanasList) => {
        return `
        <div class="service" id="${pestanasList.id}">
          <div class="pestañas">
            <div class="pestañas-img">
              <div class="img">
                <img src="${pestanasList.pestaña.img}" alt=""/>
              </div>
            </div>
            <div class="pestañas-inf">
              <div class="inf">
                <h3>${pestanasList.pestaña.title}</h3>
                <p>${pestanasList.pestaña.description}</p>
                <h4>${pestanasList.pestaña.price}$</h4>
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

      servicesContainer.innerHTML = pestañas;

    })
})

servicesContainer.addEventListener('click', e => {

  let idServ;

  if(e.target.closest('.update')) {
    idServ = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    console.log(idServ);
    window.location.pathname= `/pestana/${idServ}`;
  }

  if (e.target.closest('.delete')) {
  idServ = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
  console.log(idServ);
  deletePestaña(idServ)
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