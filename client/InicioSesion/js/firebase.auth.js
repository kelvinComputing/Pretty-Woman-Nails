import {
    getAuth,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    setPersistence,
    browserLocalPersistence
}
from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

import app from './firebase.config.js';


const usuario = document.getElementById('email');
const passwordLogin = document.getElementById('password');
const singUp = document.getElementById('sing-up');
const errorEmail = document.getElementById('errorEmail');
const btnResetContraseña = document.getElementById('btn-reset-contraseña');
const errorPassword = document.getElementById('errorPassword');
const ventanaEmergent = document.getElementById('container-emergente');
const ventanaEmergent2 = document.getElementById('container-emergente2');
let button = document.querySelector('.btn2');

const auth = getAuth(app);

const loginUser = async (token) => {
  const userLoggedSuccess = await fetch('http://localhost:3200/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  const user = await userLoggedSuccess.json();
  return user;
}



singUp.addEventListener('click', (e) => {
  e.preventDefault();

  let flag = true;

  if (usuario.value == '' ){
    camposVacios(errorEmail, 'No puede estar el campo vacio');
    flag = false;
  }  
  if (passwordLogin.value==''){
  camposVacios(errorPassword, 'No puede estar el campo vacio')
  flag = false;
  }
  if(passwordLogin.value.length >= 1 && passwordLogin.value.length < 6 ){
    errorPassword.textContent = 'La contraseña debe ser mayor de 6 caracteres'
    flag = false;
  } 

  if (!flag) {
    return;
  }
      
  setPersistence(auth, browserLocalPersistence)
  .then(() =>{
          console.log(usuario.value)
          return signInWithEmailAndPassword(auth, usuario.value, passwordLogin.value)
          .then((userCredential) => {
    
            loginUser(userCredential._tokenResponse.idToken)
            .then()
            .catch((error) => console.log(error));
            
            const user = userCredential.user;
            ventanaEmergent2.style.display="block";
            ventanaEmergent2.style.display="grid";

             
        button.addEventListener('click', function() {
          window.location.pathname = `/${user.uid}`;
        });
           

            console.log(user);
            
            
          }) 
          .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
    
          if(errorCode === 'auth/invalid-email'){
            errorEmail.textContent="El Email es incorrecto"; 
          } 
            else if(errorCode === 'auth/wrong-password'){
            errorPassword.textContent = 'La contraseña es incorrecta';
          }
            else if(errorCode === 'auth/user-not-found'){
            errorEmail.textContent = 'El usuario no exitse';
          }
            else if(errorCode === 'auth/user-disabled'){
            errorEmail.textContent = 'El usuario ha sido deshabilitado';
          }
    
          console.log(errorCode);
          console.log(errorMessage);
          })
  }).catch((error) => console.log(error))
  }
)

function camposVacios(label, message){
  label.textContent = message;
}

btnResetContraseña.addEventListener('click', (e) => {
  e.preventDefault ();
  if (usuario.value == '') {
    camposVacios(errorEmail, 'No puede estar el campo vacio')
  } else {
  sendPasswordResetEmail(auth, email.value)
  .then(() => {
    ventanaEmergent.style.display="block";
    ventanaEmergent.style.display="grid";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  })
  } 
})

usuario.addEventListener('input', () => {
  errorEmail.textContent = "";
});
passwordLogin.addEventListener('input', () => {
  errorPassword.textContent = "";
});


  
  

  
