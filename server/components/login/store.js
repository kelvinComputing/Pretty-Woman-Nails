const app = require('../../firebase/firebase.config.js')
const {getAuth} = require('firebase-admin/auth');

const auth = getAuth(app)
async function getTokenUser(idTokenUser) {
  return await auth.verifyIdToken(idTokenUser);
}

module.exports = {
  getToken: getTokenUser
}