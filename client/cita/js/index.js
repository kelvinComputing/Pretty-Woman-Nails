const servicesUser = document.getElementById('servicesUser');

let infArriba = document.querySelector('.diaTop');
let prevBtn = document.querySelector('.btn-prev-semana');
let nextBtn = document.querySelector('.btn-next-semana');
let semanaActualElement = document.querySelector('.semana-actual');
let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");

// Obtener la fecha actual
const fechaActual = new Date();

// Función para generar la tabla de la semana actual
function generarSemanaActual() {
  semanaActualElement.innerHTML = ''; // Limpiar contenido anterior

  // Clonar la fecha actual para no modificarla directamente
  const fecha = new Date(fechaActual);

  // Ajustar la fecha al domingo de la semana actual
  fecha.setDate(fecha.getDate() - fecha.getDay() + 1);

  // Generar una sola fila con los días de la semana actual

  const fila = document.createElement('tr');


  for (let i = 0; i < 6; i++) {
    const celda = document.createElement('td');
    celda.textContent = `${fecha.getDate()} ${meses[fecha.getMonth()]} `
    fila.appendChild(celda);

    // Avanzar al día siguiente
    fecha.setDate(fecha.getDate() + 1);
  }

  semanaActualElement.appendChild(fila);
}

// Función para mostrar la semana anterior
function mostrarSemanaAnterior() {
  fechaActual.setDate(fechaActual.getDate() - 7); // Retroceder 7 días
  generarSemanaActual();
}

// Función para mostrar la semana siguiente
function mostrarSemanaSiguiente() {
  fechaActual.setDate(fechaActual.getDate() + 7); // Avanzar 7 días
  generarSemanaActual();
}

// Asignar los controladores de eventos a los botones
prevBtn.addEventListener('click', mostrarSemanaAnterior);
nextBtn.addEventListener('click', mostrarSemanaSiguiente);

// Generar la tabla de la semana actual al cargar la página
generarSemanaActual();



// seleccion del horario

let horarioBtn = document.querySelector('.btn-horario');
let continuarBtn = document.querySelector('.btn-select-horario');


// funcion para mostrar continuar
function mostrarContinuar() {

  continuarBtn.style.display = 'block';


  mostrarContinuar();
}


// vista del boton continuar
horarioBtn.addEventListener('click', mostrarContinuar);

const getServices = async () => {
  const services = await fetch('http://localhost:3200/api/servicios', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const serviceData = await services.json();
  return serviceData;
}

const uid = window.location.pathname.split('/')[1];
console.log(uid)

document.addEventListener('DOMContentLoaded', async () => {
  getServices()
    .then((services) => {
      services.message.map((serv) => {
        console.log(serv.servicio)
      })
    })
})