const btn_icon1=document.getElementById('icono-mostrar');

const contraseña = document.getElementById('password');

btn_icon1.addEventListener("click", function(){
    if(contraseña.type == "password"){
        contraseña.type = "text";
        btn_icon1.src="./img/invisible.png";
    }else{
        contraseña.type = "password";
        btn_icon1.src="./img/ojo.png";
    }
});



// btn.addEventListener("click", () =>{
//     window.open("https://api.whatsapp.com/send?phone=584124500826&text=%F0%9F%91%8B%20Saludos%20el%20el%20el%20el%20el%20el%20para%20Informaci%C3%B3n%2C", "ventana")
// })