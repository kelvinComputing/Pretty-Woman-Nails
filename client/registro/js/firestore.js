import {
    initializeApp
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js'
import { 
    getFirestore, 
    collection, 
    getDocs,
    addDoc,
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js'

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
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password1');
const btncreateUser = document.getElementById('registrar');  

function validate() {
    if (name.value!==''){
        return name.value;
    } else if (email.value!=='' && name.value!==''){
        return email.value;
    } else if (password.value!=='' && email.value!=='' && name.value!=='' ){
        return password.value;
    }
}

async function getUsers(database) {
    const usersCollection = collection(database, 'users');
    const result = await getDocs(usersCollection);
    const userList = result.docs.map(doc => doc.data())
    return userList;
  }

try {
    getUsers(db).then(response => console.log(response));
} catch (err) {
    console.log(err);
}

//registro

async function createNewUser (database,user) {
    const newUser = await addDoc(collection(database,'users'), user);
    return newUser;
}


btncreateUser.addEventListener('click', () => {
    try {
        const userObject = {
            name: name.value,
            email: email.value,
            password: password.value
        }
        createNewUser(db, userObject).then (response => console.log(response.id));
    } catch (error) {
        console.error(error);
    }
});



