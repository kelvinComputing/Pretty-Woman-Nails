const db = require('./model');

async function addServicio (servicio){
    const docRef = db.collection ('servicios');
    return await docRef.add(servicio);
}

//obtener todos los servicios
async function getAllServicio () {
    const snapServ = await db.collection('servicios').get();
    snapServ.forEach((doc) => {
        console.log(doc.id);
    })

    return snapServ.docs.map((servicio) =>{
        return {
            id: servicio.id,
            servicio: servicio.data()
        }
    })
}

//obtener un solo servicio
async function getOnlyServicio (title) {
    const servicioReference = db.collection('servicios');
    const snapServ = await servicioReference.where('title', '==', title).get();

    if (snapServ.empty) {
        console.error('No matching!!');
        return;
    }

    return snapServ.docs.map((servicio) => {
        return {
            id: servicio.id,
            servicio: servicio.data()
        }
    })
}

//Actualizar Servicio
async function updateServicio(id, change) {
    const servicio = db.collection('servicios').doc(id);

    const updateChange = await servicio.update(change);

    return updateChange;
}

//Borrar Servicio 
async function deleteServicio (id) {
    const servicioDelete = await db.collection('servicios').doc(id).delete();

    return servicioDelete;
}

module.exports = {
    add: addServicio,
    list: getAllServicio,
    only: getOnlyServicio,
    update: updateServicio,
    delete: deleteServicio
}

