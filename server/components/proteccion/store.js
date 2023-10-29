const db = require('./model');

// post
async function addProteccion (proteccion){
    const docRef = db.collection ('proteccion');
    return await docRef.add(proteccion);
}

//get all services

async function getProteccion() {
    const proteccion = await db.collection('proteccion').get();

    return proteccion.docs.map((proteccionServices) => {
        return {
            id: proteccionServices.id,
            proteccion: proteccionServices.data()
        }
    })
}

// //obtener un solo servicio
async function getOnlyProteccion(title) {
    const proteccionReference = db.collection('servicios');
    const snapProteccion = await proteccionReference.where('title', '==', title).get();

    if (snapProteccion.empty) {
        console.error('No matching!!');
        return;
    }

    return snapProteccion.docs.map((proteccion) => {
        return {
            id: proteccion.id,
            proteccion: proteccion.data()
        }
    })
}

async function getOnlyProteccionById(id) {
    const proteccionReference = db.collection('proteccion').doc(`${id}`);
    const snapProteccion = await proteccionReference.get();

    if (!snapProteccion.exists) {
        console.error('No Matching!!');
        return;
    }
    return snapProteccion.data();
}

// //Actualizar Servicio
async function updateProteccion(id, change) {
    const proteccion = db.collection('proteccion').doc(id);

    const updateChange = await proteccion.update(change);

    return updateChange;
}

// //Borrar Servicio
async function deleteProteccion(id) {
    const deleteProteccion = await db.collection('proteccion').doc(id).delete();

    return deleteProteccion;
}

module.exports = {
    add: addProteccion,
    list: getProteccion,
    only: getOnlyProteccion,
    update: updateProteccion,
    delete: deleteProteccion,
    onlyID: getOnlyProteccionById
}