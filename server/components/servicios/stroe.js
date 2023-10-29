const db = require('./model');

// post
async function addServicios (servicio){
    const docRef = db.collection ('servicios');
    return await docRef.add(servicio);
}

//get all services

async function getServicios() {
    const eyebrows = await db.collection('servicios').get();

    return eyebrows.docs.map((servicios) => {
        return {
            id: servicios.id,
            servicio: servicios.data()
        }
    })
}

module.exports = {
    add: addServicios,
    list: getServicios
}