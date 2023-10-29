const servicesContainer = document.querySelector('.service-manicura');
const ventanaEmergente = document.getElementById('container-emergente');


const listManicureServices = async () => {
  const getData = await fetch('http://localhost:3200/api/manicure');
  const getDataResult = await getData.json();

  return getDataResult;
}

const deleteManicura = async (id) => {
  const deleteManicurasData = await fetch(`http://localhost:3200/api/manicure/${id}`, {
    method: 'DELETE',
  });
  const deleteSuccess = await deleteManicurasData.json();
  return deleteSuccess;
}

window.addEventListener('DOMContentLoaded', () => {
  listManicureServices()
    .then((data) => {

      console.log(data.message);

      const buttons = () => ` 
        
        <button class="update" id="btnes">Update</button>
        <button class="delete" id="btnes">Delete</button>
          `

      const manicure = data.message.map((manicureList) => {
        return `
        <div class="service" id="${manicureList.id}">
          <div class="manicura">
            <div class="manicura-img">
              <div class="img">
                <img src="${manicureList.manicure.img}" alt="" />
              </div>
            </div>
            <div class="manicura-inf">
              <div class="inf">
                <h3>${manicureList.manicure.title}</h3>
                <p>${manicureList.manicure.description}</p>
                <p>${manicureList.manicure.description2}</p>
                <h4>${manicureList.manicure.price}$</h4>
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
  
      servicesContainer.innerHTML = manicure;

    })
})

servicesContainer.addEventListener('click', e => {

  let idServ;

  if(e.target.closest('.update')) {
    idServ = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    console.log(idServ);
    window.location.pathname= `/Manicura/${idServ}`;
  }

  if (e.target.closest('.delete')) {
  idServ = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
  console.log(idServ);
  deleteManicura(idServ)
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