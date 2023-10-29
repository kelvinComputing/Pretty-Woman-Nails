const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index');

router.get ('/', (req, res) => {
    controller.getPestaña()
        .then((pestaña) => response.success(req, res, pestaña, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.get('/:id', (req, res) =>{
    console.log(req.params.id)
        controller.getOnlyPestañaById(req.params.id)
        .then((idPestaña) => response.success(req, res, idPestaña, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.post ('/', (req, res) => {
    controller.addPestaña(req.body)
    .then((pestaña) => response.success(req, res, pestaña, 201))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.patch ('/:id', (req, res) => {
    const id = req.params.id;
    const change = req.body;
    controller.updatePestaña(id, change)
    .then((changeServicio) => response.success(req, res, changeServicio, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.delete ('/:id', (req, res) => {
    const id = req.params.id;
    controller.deletePestaña(id)
    .then((deleted) => response.success(req, res, deleted, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

module.exports = router;