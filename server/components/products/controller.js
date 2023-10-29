const store = require('./store');

function addServicio(servicio) {
    return new Promise ((resolve, reject) => {
        if (Object.entries(servicio).length === 0){
            console.log("[ServiciosController]: El servicio no tiene contenido, el servicio está vacío.");
            reject('no hay servicio');
        }

        store.add(servicio);
        resolve(servicio);
    }) 
}

function getServicio() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

function getOnlyServicio(titleServicio) {
    return new Promise((resolve, reject)=> {
        if (!titleServicio){
            console.log("[ServiciosController]: El servicio no tiene título para la búsqueda, el título del servicio está vacío.");
            reject('no hay título del serivicio')
        }

        resolve(store.only(titleServicio))
    })
}

function updateServicio(id, changeServicio) {
    return new Promise (async (resolve, reject) => {
        if(!id || !changeServicio) {
            console.log('[UpdateServicio]: Error Data.');
            reject('Data invalid in metod patch');
        }

        const result = await store.update(id, changeServicio);
        resolve(result);
    })
}

function deleteServicio(id)  {
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
    addServicio,
    getServicio,
    getOnlyServicio,
    updateServicio,
    deleteServicio,
}



