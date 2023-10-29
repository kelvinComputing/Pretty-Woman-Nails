const store = require('./store');

function addManicura(manicura) {
    return new Promise ((resolve, reject) => {
        if (Object.entries(manicura).length === 0){
            console.log("[ServiciosController]: El servicio no tiene contenido, el servicio está vacío.");
            reject('no hay servicio');
        }

        store.add(manicura);
        resolve(manicura);
    })
}

function getServicesManicure() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

function getOnlyManicura(titleManicura) {
    return new Promise((resolve, reject)=> {
        if (!titleManicura){
            console.log("[ServiciosController]: El servicio no tiene título para la búsqueda, el título del servicio está vacío.");
            reject('no hay título del serivicio')
        }

        resolve(store.only(titleManicura))
    })
}

function getOnlyManicuraById(idManicura) {
    return new Promise((resolve, reject)=> {
        if (!idManicura){
            console.log("[ServiciosController]: El servicio no tiene título para la búsqueda, el título del servicio está vacío.");
            reject('no hay título del serivicio')
        }

        resolve(store.onlyId(idManicura))
    })
}

function updateManicura(id, changeServicio) {
    return new Promise (async (resolve, reject) => {
        if(!id || !changeServicio) {
            console.log('[UpdateServicio]: Error Data.');
            reject('Data invalid in metod patch');
        }

        const result = await store.update(id, changeServicio);
        resolve(result);
    })
}

function deleteManicura(id)  {
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
    addManicura,
    getServicesManicure,
    getOnlyManicura,
    updateManicura,
    deleteManicura,
    getOnlyManicuraById
}