import app from './firebase.config.js';
import { 
    getFirestore, 
    collection, 
    getDocs
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js'

const db = getFirestore(app);

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