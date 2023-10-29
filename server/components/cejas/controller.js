const store = require('./store');

function addEyebrows(eyebrows) {
    return new Promise ((resolve, reject) => {
        if (Object.entries(eyebrows).length === 0){
            console.log("[ServiciosController]: El servicio no tiene contenido, el servicio está vacío.");
            reject('no hay servicio');
        }

        store.add(eyebrows);
        resolve(eyebrows);
    })
}

function getServicesEyebrows() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

function getOnlyEyebrows(titleEyebrow) {
    return new Promise((resolve, reject)=> {
        if (!titleEyebrow){
            console.log("[ServiciosController]: El servicio no tiene título para la búsqueda, el título del servicio está vacío.");
            reject('no hay título del serivicio')
        }

        resolve(store.only(titleEyebrow))
    })
}

function getOnlyEyebrowById(idEyebrow) {
    return new Promise((resolve, reject)=> {
        if (!idEyebrow){
            console.log("[ServiciosController]: El servicio no tiene título para la búsqueda, el título del servicio está vacío.");
            reject('no hay título del serivicio')
        }

        resolve(store.onlyID(idEyebrow))
    })
}



function updateEyebrows(id, changeServicio) {
    return new Promise (async (resolve, reject) => {
        if(!id || !changeServicio) {
            console.log('[UpdateServicio]: Error Data.');
            reject('Data invalid in metod patch');
        }

        const result = await store.update(id, changeServicio);
        resolve(result);
    })
}

function deleteEyebrows(id)  {
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
    addEyebrows,
    getServicesEyebrows,
    getOnlyEyebrows,
    updateEyebrows,
    deleteEyebrows,
    getOnlyEyebrowById
}