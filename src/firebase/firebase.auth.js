import {
    getAuth,
    signInWithEmailAndPassword,
    sendPasswordResetEmail
}
from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

import app from './firebase.config.js';

const usuario = document.getElementById('email');
const passwordLogin = document.getElementById('password');
const singUp = document.getElementById('sing-up');
const errorEmail = document.getElementById('errorEmail');
const btnResetContraseña = document.getElementById('btn-reset-contraseña');
// const errorPassword = document.getElementById('errorPassword');

const auth = getAuth(app);

singUp.addEventListener('click', (e) => {
  e.preventDefault();
    if (usuario.value == '' ){
      camposVacios(errorEmail, 'No puede estar el campo vacio');
    }  
      else if (passwordLogin.value==''){
        camposVacios(errorPassword, 'No puede estar el campo vacio')
    } else 
    if(passwordLogin.value.length >= 1 && passwordLogin.value.length < 6 ){
        errorPassword.textContent = 'La contraseña debe ser mayor de 6 caracteres'
    } 
      else { 

      signInWithEmailAndPassword(auth, usuario.value, passwordLogin.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // window.location.href="../../index.html";
        
        console.log(user);
        // ...
        
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
  }
})

function camposVacios(label, message){
  label.textContent = message;
}

function todoCorrecto(label){
  label.textContent='';
}

auth.onAuthStateChanged(user => {
  if (user) {
    console.log('Usuario Activo');
    const email = user.emailVerified;
      if (email) {
        // window.reload.href="../../index.html";
        // alert('Iniciaste sesion')
      }
        else {
          auth.signOut();
        }
  }
    else {
      console.log('Usuario inactivo');
    }
})

btnResetContraseña.addEventListener('click', (e) => {
  e.preventDefault ();
  if (usuario.value == '') {
    camposVacios(errorEmail, 'No puede estar el campo vacio')
  } else {
  sendPasswordResetEmail(auth, email.value)
  .then(() => {
    alert('se envio el correo para restablecer la constraseña')
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })
  } 
})


function validarcampos() {
  if (usuario.value == '' ){
    camposVacios(errorEmail, 'No puede estar el campo vacio');
  }  else {
    camposVacios(errorEmail, '');
  }
    if (passwordLogin.value==''){
      camposVacios(errorPassword, 'No puede estar el campo vacio')
    }else {
        camposVacios(errorPassword, '');
      }
}


  
  

  
