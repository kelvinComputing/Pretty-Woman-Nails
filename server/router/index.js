const express = require('express');
const router = express.Router();
const manicure = require('../components/manicura/router');
const masajes = require('../components/masajes/router');
const tratamientos = require('../components/tratamiento/router');
const proteccion = require('../components/proteccion/router');
const cejas = require('../components/cejas/router');
const pestana = require('../components/pestana/router');
const login = require('../components/login/router');

const servicios = require('../components/products/router');
const users = require('../components/users/router');

function routerApp(app) {
    app.use('/api', router);
    app.use('/api/manicure', manicure);
    app.use('/api/manicure/:id', manicure);
    app.use('/api/masajes', masajes);
    app.use('/api/masajes/:id', masajes);
    app.use('/api/tratamientos', tratamientos);
    app.use('/api/proteccion', proteccion);
    app.use('/api/proteccion/:id', proteccion);
    app.use('/api/cejas', cejas);
    app.use('/api/cejas/:id', cejas);
    app.use('/api/pestana', pestana);
    app.use('/api/pestana/:id', pestana);
    app.use('/api/servicios', servicios);
    app.use('/api/users', users);
    app.use('/api/login', login );
}

module.exports = routerApp;