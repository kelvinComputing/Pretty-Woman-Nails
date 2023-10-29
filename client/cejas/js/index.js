const servicesContainer = document.querySelector('.service-cejas');
const ventanaEmergente = document.getElementById('container-emergente');

const listEyebrowsServices = async () => {
  const getData = await fetch('http://localhost:3200/api/cejas');
  const getDataResult = await getData.json();

  return getDataResult;
}

const deleteEyebrows = async (id) => {
  const deleteEyebrowsData = await fetch(`http://localhost:3200/api/cejas/${id}`, {
    method: 'DELETE',
  });
  const deleteSuccess = await deleteEyebrowsData.json();
  return deleteSuccess;
}

window.addEventListener('DOMContentLoaded', () => {
  listEyebrowsServices()
    .then((data) => {

      console.log(data.message);

      const buttons = () => ` 
        
        <button class="update" id="btnes">Update</button>
        <button class="delete" id="btnes">Delete</button>
          `
      

      const eyebrows = data.message.map((cejasList) => {
        return `
        <div class="service" id="${cejasList.id}">
          <div class="cejas">
            <div class="cejas-img">
              <div class="img">
                <img src="${cejasList.cejas.img}" alt="" />
              </div>
            </div>
            <div class="cejas-inf">
              <div class="inf">
                <h3>${cejasList.cejas.title}</h3>
                <p>${cejasList.cejas.description}</p>
                <h4>${cejasList.cejas.price}$</h4>
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

      servicesContainer.innerHTML = eyebrows;

    })
})

servicesContainer.addEventListener('click', e => {

  let idServ;

  if(e.target.closest('.update')) {
    idServ = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    console.log(idServ);
    window.location.pathname= `/cejas/${idServ}`;
  }

  if (e.target.closest('.delete')) {
  idServ = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
  console.log(idServ);
  deleteEyebrows(idServ)
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