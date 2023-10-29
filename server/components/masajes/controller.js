const store = require('./store');

function addMasaje(masaje) {
    return new Promise ((resolve, reject) => {
        if (Object.entries(masaje).length === 0){
            console.log("[ServiciosController]: El servicio no tiene contenido, el servicio está vacío.");
            reject('no hay servicio');
        }

        store.add(masaje);
        resolve(masaje);
    })
}

function getServicesMasajes() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

function getOnlyMasaje(titleMasaje) {
    return new Promise((resolve, reject)=> {
        if (!titleMasaje){
            console.log("[ServiciosController]: El servicio no tiene título para la búsqueda, el título del servicio está vacío.");
            reject('no hay título del servicio')
        }

        resolve(store.only(titleMasaje))
    })
}

function getOnlyMasajeById(idMasaje) {
    return new Promise((resolve, reject)=> {
        if (!idMasaje){
            console.log("[ServiciosController]: El servicio no tiene título para la búsqueda, el título del servicio está vacío.");
            reject('no hay título del serivicio')
        }

        resolve(store.onlyID(idMasaje))
    })
}

function updateMasaje(id, changeServicio) {
    return new Promise (async (resolve, reject) => {
        if(!id || !changeServicio) {
            console.log('[UpdateServicio]: Error Data.');
            reject('Data invalid in metod patch');
        }

        const result = await store.update(id, changeServicio);
        resolve(result);
    })
}

function deleteMasaje(id)  {
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
    addMasaje,
    getServicesMasajes,
    getOnlyMasaje,
    updateMasaje,
    deleteMasaje,
    getOnlyMasajeById
}