const store = require('./store');

function addProteccion(proteccion) {
    return new Promise ((resolve, reject) => {
        if (Object.entries(proteccion).length === 0){
            console.log("[ServiciosController]: El servicio no tiene contenido, el servicio está vacío.");
            reject('no hay servicio');
        }

        store.add(proteccion);
        resolve(proteccion);
    })
}

function getServicesProteccion() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

function getOnlyProteccion(titlePtoteccion) {
    return new Promise((resolve, reject)=> {
        if (!titlePtoteccion){
            console.log("[ServiciosController]: El servicio no tiene título para la búsqueda, el título del servicio está vacío.");
            reject('no hay título del serivicio')
        }

        resolve(store.only(titlePtoteccion))
    })
}

function getOnlyProteccionById(idProteccion) {
    return new Promise((resolve, reject)=> {
        if (!idProteccion){
            console.log("[ServiciosController]: El servicio no tiene título para la búsqueda, el título del servicio está vacío.");
            reject('no hay título del serivicio')
        }

        resolve(store.onlyID(idProteccion))
    })
}

function updateProteccion(id, changeServicio) {
    return new Promise (async (resolve, reject) => {
        if(!id || !changeServicio) {
            console.log('[UpdateServicio]: Error Data.');
            reject('Data invalid in metod patch');
        }

        const result = await store.update(id, changeServicio);
        resolve(result);
    })
}

function deleteProteccion(id)  {
    return new Promise (async (resolve, reject) => {
        if (!id) {
            console.log('[DeleteServicio]: Error Data.');
            reject('Data invalid in metod delete');
        }

        const result = await store.delete(id);
        resolve(result);
    })
}

module.exports = {
    addProteccion,
    getServicesProteccion,
    getOnlyProteccion,
    updateProteccion,
    deleteProteccion,
    getOnlyProteccionById
}