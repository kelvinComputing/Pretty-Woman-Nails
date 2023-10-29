import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
}
from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

import app from './firebase.config.js';

import { 
  getFirestore, 
  collection, 
  getDocs,
  addDoc,
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js'

const db = getFirestore(app);

const name = document.getElementById('name');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const passwword2 = document.getElementById('password2');
const btncreateUser = document.getElementById('registrar');
const errorName = document.getElementById('errorName');
const errorEmail = document.getElementById('errorEmail');
const errorPassword = document.getElementById('errorPassword');
const errorPassword2 = document.getElementById('errorPassword2');
const auth = getAuth(app);

// async function createNewUser (database,user) {
//   const newUser = await addDoc(collection(database,'users'), user);
//   return newUser;
// }

btncreateUser.addEventListener('click', (e) => {
  e.preventDefault();
  if (name.value == ''){
    errorName.textContent = "El campo no debe estar vacio";
  } else if (email.value == ''){
    errorEmail.textContent="El campo no debe estar vacio";
  } else if (password1.value == ''){
    errorPassword.textContent="El campo no debe estar vacio";
  } else if (passwword2.value == ''){
    errorPassword2.textContent="El campo no debe estar vacio";
  } else if (/^([0-9])*$/.test(name.value)){
    errorName.textContent="El nombre no debe contener numeros";
  } else if (password1.value != passwword2.value){
    errorPassword.textContent = 'La contraseñas deben coincidir';
    errorPassword2.textContent = 'La contraseñas deben coincidir';
  }
  else {

  createUserWithEmailAndPassword(auth, email.value, password1.value)
  .then((userCredential) => {
    const user = userCredential.user;
     //iniciar sesion
    sendEmailVerification(auth.currentUser).then(() => {
      alert('se ha enviado un correo de verificación')
    })
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode == 'auth/invalid-email'){
      errorEmail.textContent = 'Correo invalido';
    } else 
    if (errorCode == 'auth/weak-password'){
      errorPassword.textContent = 'La contraseña debe ser mayor de 5 digitos';
      errorPassword2.textContent = 'La contraseña debe ser mayor de 5 digitos';
    } else
    if (errorCode == 'auth/email-already-in-use'){
      errorEmail.textContent = 'El correo ya esta registrado';
    }
    console.log('no se creo');
    console.log(errorCode);
    console.log(error.message);
    // ..
  });
}
// try {
//   const userObject = {
//       name: name.value,
//       email: email.value,
//       password: password.value
//   }
//   createNewUser(db, userObject).then (response => console.log(response.id));
// } catch (error) {
//   console.error(error);
// }
})










