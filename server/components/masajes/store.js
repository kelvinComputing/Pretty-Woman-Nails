const db = require('./model');

// post
async function addMasajes (masaje){
    const docRef = db.collection ('masajes');
    return await docRef.add(masaje);
}

//get all services

async function getMasaje() {
    const masaje = await db.collection('masajes').get();

    return masaje.docs.map((masajesServices) => {
        return {
            id: masajesServices.id,
            masajes: masajesServices.data()
        }
    })
}

// //obtener un solo servicio
async function getOnlyMasaje(title) {
    const masajeReference = db.collection('masajes');
    const snapMasaje = await masajeReference.where('title', '==', title).get();

    if (snapMasaje.empty) {
        console.error('No matching!!');
        return;
    }

    return snapMasaje.docs.map((masaje) => {
        return {
            id: masaje.id,
            masaje: masaje.data()
        }
    })
}

async function getOnlyMasajeById(id) {
    const masajeReference = db.collection('masajes').doc(`${id}`);
    const snapMasaje = await masajeReference.get();

    if (!snapMasaje.exists) {
        console.error('No Matching!!');
        return;
    }
    return snapMasaje.data();
}

// //Actualizar Servicio
async function updateMasaje(id, change) {
    const masaje = db.collection('masajes').doc(id);

    const updateChange = await masaje.update(change);

    return updateChange;
}

// //Borrar Servicio
async function deleteMasaje(id) {
    const servicioDelete = await db.collection('masajes').doc(id).delete();

    return servicioDelete;
}

module.exports = {
    add: addMasajes,
    list: getMasaje,
    only: getOnlyMasaje,
    update: updateMasaje,
    delete: deleteMasaje,
    onlyID: getOnlyMasajeById
}
