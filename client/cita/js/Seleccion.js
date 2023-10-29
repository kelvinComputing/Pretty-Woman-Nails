const btnMostrarServ = document.querySelector('.btnServ');
const btnMostrarFecha = document.querySelector('.btnFe');
const btnMostrarDatos = document.querySelector('.btnDatos');


const ventanaCalendar = document.querySelector('.timezone-btn');
const ventaHora = document.querySelectorAll('.btn-horario');
const venBtnhorario = document.querySelectorAll('.btn-select-horario');

const ventanaDatos = document.querySelector('.formulario-datos');
const venBtnDatos = document.querySelector('.btn-reserver-cita')


btnMostrarFecha.addEventListener('click', function (){
    ventanaCalendar.style.display="block";
})

btnMostrarDatos.addEventListener('click', function (){
    ventanaDatos.style.display="block";
})

venBtnDatos.addEventListener('click', function (){
    window.open("https://api.whatsapp.com/send?phone=584124500826&text=%F0%9F%91%8B%20Saludos%20para%20Informaci%C3%B3n%2C");
})