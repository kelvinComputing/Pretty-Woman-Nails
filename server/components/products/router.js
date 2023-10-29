const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index');

router.get ('/', (req, res) => {
    if (req.body.title) {
        controller.getOnlyServicio(req.body.title)
        .then((serviciosList) => response.success(req, res, serviciosList, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error))
    } else {
        controller.getServicio()
        .then((serviciosList) => response.success(req, res, serviciosList, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error))
    }
})

router.post ('/', (req, res) => {
    controller.addServicio(req.body)
    .then((servicio) => response.success(req, res, servicio, 201))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.patch ('/', (req, res) => {
    const id = req.params.id;
    const change = req.dody;
    controller.updateServicio(id, change)
    .then((changeServicio) => response.success(req, res, changeServicio, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.delete ('/', (req, res) => {
    const id = req.params.id;
    controller.deleteServicio(id)
    .then((deleted) => response.success(req, res, deleted, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

module.exports = router;