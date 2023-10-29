const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index');

router.get('/', (req, res) => {

    controller.getServicios()
        .then((servicios) => response.success(req, res, servicios, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.post ('/', (req, res) => {
    controller.addServicios(req.body)
    .then((servicios) => response.success(req, res, servicios, 201))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

module.exports = router;
