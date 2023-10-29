const store = require('./store');

function addServicios(servicios) {
    return new Promise ((resolve, reject) => {
        if (Object.entries(servicios).length === 0){
            console.log("[ServiciosController]: El servicio no tiene contenido, el servicio está vacío.");
            reject('no hay servicio');
        }

        store.add(servicios);
        resolve(servicios);
    })
}

function getServicios() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

module.exports = {
    addServicios,
    getServicios
}