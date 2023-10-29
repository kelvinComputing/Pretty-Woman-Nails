const store = require('./store');

function addPestaña(pestaña) {
    return new Promise ((resolve, reject) => {
        if (Object.entries(pestaña).length === 0){
            console.log("[ServiciosController]: El servicio no tiene contenido, el servicio está vacío.");
            reject('no hay servicio');
        }

        store.add(pestaña);
        resolve(pestaña);
    }) 
}

function getPestaña() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

function getOnlyPestaña(titlePestaña) {
    return new Promise((resolve, reject)=> {
        if (!titlePestaña){
            console.log("[ServiciosController]: El servicio no tiene título para la búsqueda, el título del servicio está vacío.");
            reject('no hay título del serivicio')
        }

        resolve(store.only(titlePestaña))
    })
}

function getOnlyPestañaById(idPestaña) {
    return new Promise((resolve, reject)=> {
        if (!idPestaña){
            console.log("[ServiciosController]: El servicio no tiene título para la búsqueda, el título del servicio está vacío.");
            reject('no hay título del serivicio')
        }

        resolve(store.onlyID(idPestaña))
    })
}

function updatePestaña(id, changeServicio) {
    return new Promise (async (resolve, reject) => {
        if(!id || !changeServicio) {
            console.log('[UpdateServicio]: Error Data.');
            reject('Data invalid in metod patch');
        }

        const result = await store.update(id, changeServicio);
        resolve(result);
    })
}

function deletePestaña(id)  {
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
    addPestaña,
    getPestaña,
    getOnlyPestaña,
    updatePestaña,
    deletePestaña,
    getOnlyPestañaById
}



