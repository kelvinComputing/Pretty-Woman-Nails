const db = require('./model');

// post
async function addEyebrows (eyebrows){
    const docRef = db.collection ('cejas');
    return await docRef.add(eyebrows);
}

//get all services

async function getEyebrows() {
    const eyebrows = await db.collection('cejas').get();

    return eyebrows.docs.map((eyebrowsServices) => {
        return {
            id: eyebrowsServices.id,
            cejas: eyebrowsServices.data()
        }
    })
}

// //obtener un solo servicio
async function getOnlyEyebrows(title) {
    const eyebrowsReference = db.collection('cejas');
    const snapEyebrows = await eyebrowsReference.where('title', '==', title).get();

    if (snapEyebrows.empty) {
        console.error('No matching!!');
        return;
    }

    return snapEyebrows.docs.map((eyebrow) => {
        return {
            id: eyebrow.id,
            eyebrow: eyebrow.data()
        }
    })
}

async function getOnlyEyebrowById(id) {
    const eyebrowsReference = db.collection('cejas').doc(`${id}`);
    const snapEyebrows = await eyebrowsReference.get();

    if (!snapEyebrows.exists) {
        console.error('No Matching!!');
        return;
    }
    return snapEyebrows.data();
}


// //Actualizar Servicio
async function updateEyebrows(id, change) {
    const eyebrow = db.collection('cejas').doc(id);

    const updateChange = await eyebrow.update(change);

    return updateChange;
}

// //Borrar Servicio
async function deleteEyebrows(id) {
    const eyebrowsDelete = await db.collection('cejas').doc(id).delete();
    
    
    return eyebrowsDelete;
}

module.exports = {
    add: addEyebrows,
    list: getEyebrows,
    only: getOnlyEyebrows,
    update: updateEyebrows,
    delete: deleteEyebrows,
    onlyID: getOnlyEyebrowById
}