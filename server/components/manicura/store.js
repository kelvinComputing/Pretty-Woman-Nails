const db = require('./model');

// post
async function addManicure (manicure){
    const docRef = db.collection ('maniura');
    return await docRef.add(manicure);
}

//get all services

async function getManicure() {
    const manicure = await db.collection('maniura').get();

    return manicure.docs.map((manicureServices) => {
        return {
            id: manicureServices.id,
            manicure: manicureServices.data()
        }
    })
}

// //obtener un solo servicio
async function getOnlyManicure(title) {
    const manicureReference = db.collection('maniura');
    const snapManicura = await manicureReference.where('title', '==', title).get();

    if (snapManicura.empty) {
        console.error('No matching!!');
        return;
    }

    return snapManicura.docs.map((manicura) => {
        return {
            id: manicura.id,
            manicura: manicura.data()
        }
    })
}

async function getOnlyManicuraById(id) {
    const manicuraReference = db.collection('maniura').doc(`${id}`);
    const snapManicura = await manicuraReference.get();

    if (!snapManicura.exists) {
        console.error('No Matching!!');
        return;
    }
    return snapManicura.data();
}

// //Actualizar Servicio
async function updateManicura(id, change) {
    const manicura = db.collection('maniura').doc(id);

    const updateChange = await manicura.update(change);

    return updateChange;
}

// //Borrar Servicio
async function deleteManicure(id) {
    const servicioDelete = await db.collection('maniura').doc(id).delete();

    return servicioDelete;
}

module.exports = {
    add: addManicure,
    list: getManicure,
    only: getOnlyManicure,
    update: updateManicura,
    delete: deleteManicure,
    onlyId: getOnlyManicuraById
}