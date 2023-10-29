const db = require('./model');

// post
// async function addServicio (servicio){
//     const docRef = db.collection ('servicios');
//     return await docRef.add(servicio);
// }

//get all services

async function getTratamiento() {
    const tratamiento = await db.collection('tratamiento').get();

    return tratamiento.docs.map((tratamientosServices) => {
        return {
            id: tratamientosServices.id,
            tratamientos: tratamientosServices.data()
        }
    })
}

// //obtener un solo servicio
// async function getOnlyServicio(title) {
//     const servicioReference = db.collection('servicios');
//     const snapServ = await servicioReference.where('title', '==', title).get();

//     if (snapServ.empty) {
//         console.error('No matching!!');
//         return;
//     }

//     return snapServ.docs.map((servicio) => {
//         return {
//             id: servicio.id,
//             servicio: servicio.data()
//         }
//     })
// }

// //Actualizar Servicio
// async function updateServicio(id, change) {
//     const servicio = db.collection('servicios').doc(id);

//     const updateChange = await servicio.update(change);

//     return updateChange;
// }

// //Borrar Servicio
// async function deleteServicio(id) {
//     const servicioDelete = await db.collection('servicios').doc(id).delete();

//     return servicioDelete;
// }

module.exports = {
    // add: addServicio,
    list: getTratamiento,
    // only: getOnlyServicio,
    // update: updateServicio,
    // delete: deleteServicio
}