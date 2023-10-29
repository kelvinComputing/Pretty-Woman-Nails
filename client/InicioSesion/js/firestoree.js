import {
    initializeApp
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js'
import { 
    getFirestore, 
    collection, 
    getDocs,
    addDoc,
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js'


import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'


const firebaseConfig = {
    apiKey: "AIzaSyAP5e99vWNerZWWNpy57n02sEpTthe8GOU",
    authDomain: "pretty-woman-a794c.firebaseapp.com",
    projectId: "pretty-woman-a794c",
    storageBucket: "pretty-woman-a794c.appspot.com",
    messagingSenderId: "270197182515",
    appId: "1:270197182515:web:96c569bf893add37f99346",
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth= getAuth();
const singUp = document.getElementById('sing-up');
const usuario = document.getElementById('email');
const password = document.getElementById('password');


singUp.addEventListener('click', (e) => {
  e.preventDefault();
    signInWithEmailAndPassword(auth, usuario.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
    alert('login');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('usuario invalido')
  });
})