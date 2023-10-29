const {
    getAuth,
} = require('firebase-admin/auth');
const app = require('./../../firebase/firebase.config');

const admin = require('firebase-admin');
const {
    getFirestore,
} = require('firebase-admin/firestore');

const db = getFirestore(admin.apps[app]);

const auth = getAuth(app);

module.exports = {
    auth,
    db 
};