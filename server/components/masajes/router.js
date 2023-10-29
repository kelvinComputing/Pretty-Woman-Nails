const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index');

router.get('/', (req, res) => {
    controller.getServicesMasajes()
        .then((masajes) => response.success(req, res, masajes, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.get('/:id', (req, res) =>{
    console.log(req.params.id)
        controller.getOnlyMasajeById(req.params.id)
        .then((idMasaje) => response.success(req, res, idMasaje, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.post ('/', (req, res) => {
    controller.addMasaje(req.body)
    .then((masaje) => response.success(req, res, masaje, 201))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.patch ('/:id', (req, res) => {
    const id = req.params.id;
    const change = req.body;
    controller.updateMasaje(id, change)
    .then((changeServicio) => response.success(req, res, changeServicio, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.delete ('/:id', (req, res) => {
    const id = req.params.id;
    controller.deleteMasaje(id)
    .then((deleted) => response.success(req, res, deleted, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

module.exports = router;