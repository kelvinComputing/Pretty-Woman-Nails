const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index');

router.get('/', (req, res) => {
    controller.getServicesProteccion()
        .then((proteccion) => response.success(req, res, proteccion, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.get('/:id', (req, res) =>{
    console.log(req.params.id)
        controller.getOnlyProteccionById(req.params.id)
        .then((idProteccion) => response.success(req, res, idProteccion, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.post ('/', (req, res) => {
    controller.addProteccion(req.body)
    .then((proteccion) => response.success(req, res, proteccion, 201))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.patch ('/:id', (req, res) => {
    const id = req.params.id;
    const change = req.body;
    controller.updateProteccion(id, change)
    .then((changeServicio) => response.success(req, res, changeServicio, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.delete ('/:id', (req, res) => {
    const id = req.params.id;
    controller.deleteProteccion(id)
    .then((deleted) => response.success(req, res, deleted, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

module.exports = router;