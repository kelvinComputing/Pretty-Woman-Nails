const db = require('./model');

async function addPestaña (pestaña){
    const docRef = db.collection ('pestañas');
    return await docRef.add(pestaña);
}

//obtener todos los servicios
async function getAllPestañas () {
    const snapPestaña = await db.collection('pestañas').get();

    return snapPestaña.docs.map((pestaña) =>{
        return {
            id: pestaña.id,
            pestaña: pestaña.data()
        }
    })
}

//obtener un solo servicio
async function getOnlyPestaña (title) {
    const pestañaReference = db.collection('pestañas');
    const snapPestaña = await pestañaReference.where('title', '==', title).get();

    if (snapPestaña.empty) {
        console.error('No matching!!');
        return;
    }

    return snapPestaña.docs.map((pestaña) => {
        return {
            id: pestaña.id,
            pestaña: pestaña.data()
        }
    })
}

async function getOnlyPestañaById(id) {
    const pestañaReference = db.collection('pestañas').doc(`${id}`);
    const snapPestaña = await pestañaReference.get();

    if (!snapPestaña.exists) {
        console.error('No Matching!!');
        return;
    }
    return snapPestaña.data();
}

//Actualizar Servicio
async function updatePestaña(id, change) {
    const pestaña = db.collection('pestañas').doc(id);

    const updateChange = await pestaña.update(change);

    return updateChange;
}

//Borrar Servicio 
async function deletePestaña (id) {
    const pestañaDelete = await db.collection('pestañas').doc(id).delete();

    return pestañaDelete;
}

module.exports = {
    add: addPestaña,
    list: getAllPestañas,
    only: getOnlyPestaña,
    update: updatePestaña,
    delete: deletePestaña,
    onlyID: getOnlyPestañaById
}

