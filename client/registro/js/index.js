const btnRegistrar = document.getElementById('registrar');
const names = document.getElementById('name');
const emails =document.getElementById('email');
const passwords = document.getElementById('password1');
const passwword2 = document.getElementById('password2');
const ventanaEmergente = document.querySelector('.container-emergente');
const btnContinuar = document.querySelector('.btn-continue');
const errorName = document.getElementById('errorName');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');
const errorPassword2 = document.getElementById('errorPassword2');


const registerUser = async (user)  => {
    const createUser = await fetch('http://localhost:3200/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) 
    })

    const createUse = await createUser.json();

    return createUse;
}

btnRegistrar.addEventListener('click', (e) => {
    e.preventDefault();

    let flag = true;

    if (names.value == ''){
        errorName.textContent = "El campo no debe estar vacio";
        flag = false;
    }  else if ((!/^[a-zA-Z]+$/.test(names.value))){
        errorName.textContent="El nombre no debe contener numeros";
        flag = false;
    }

    if (emails.value==""){
        errorEmail.textContent = "El campo no debe estar vacio";
        flag = false;
    }  else if (!/^([^\s@]+@[^\s@]+\.[^\s@]+)$/.test(emails.value)){
        errorEmail.textContent="No es un correo";
        flag = false;
    }

    if (passwords.value==""){
        errorPassword.textContent = "El campo no debe estar vacio";
        flag = false;
    } else if (passwords.value.length < 6 ) {
        errorPassword.textContent = 'La password tiene que ser mayor de 5 dígitos';
        errorPassword2.textContent = 'Las password tiene que ser mayor de 5 dígitos';
        flag = false;
    }

    if (passwword2.value==""){
        errorPassword2.textContent = "El campo no debe estar vacio";
        flag = false;
    }

    if (passwords.value != passwword2.value){
        errorPassword.textContent = 'Las contraseñas deben coincidir';
        errorPassword2.textContent = 'Las contraseñas deben coincidir';
        flag = false;
    }

    if (!flag) {
        return;
    }

    const name = names.value;
    const email = emails.value;
    const password = passwords.value;
    const userRegistered = {
        displayName: name,
        email,
        password,
        role: "Usuario"
    }
    
    ventanaEmergente.style.display="block";
    ventanaEmergente.style.display="grid";

    registerUser(userRegistered)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

})

names.addEventListener('input', () => {
    errorName.textContent = "";
});
emails.addEventListener('input', () => {
    errorEmail.textContent = "";
});
passwords.addEventListener('input', () => {
    errorPassword.textContent = "";
});
passwword2.addEventListener('input', () => {
    errorPassword2.textContent = "";
});

