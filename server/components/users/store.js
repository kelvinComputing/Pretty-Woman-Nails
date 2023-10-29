const {
    auth, 
    db
} = require('./model');

function addUser(userData) {
    return auth.createUser(userData);
}

async function saveUserFirestore (userData) {
    const docRef = db.collection('users');
    return await docRef.add(userData);
}

// permissions

async function addPermissions(uid, objectRole) {
    return await auth.setCustomUserClaims(uid, objectRole);
  }
  
  // Token generate
  async function customToken(uid) {
    return await auth.createCustomToken(uid);
  }

function getUsers(uid) {

    if (uid) {
        return auth.getUser(uid);
    }else {
        return auth.listUsers(100);
    }
}



module.exports = {
    add: addUser,
    save: saveUserFirestore,
    list: getUsers,
    role: addPermissions,
    customToken: customToken
}