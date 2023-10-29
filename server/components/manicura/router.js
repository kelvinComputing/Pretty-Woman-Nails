const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index');

router.get('/', (req, res) => {
    controller.getServicesManicure()
        .then((manicura) => response.success(req, res, manicura, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.get('/:id', (req, res) =>{
    console.log(req.params.id)
        controller.getOnlyManicuraById(req.params.id)
        .then((idManicura) => response.success(req, res, idManicura, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.post ('/', (req, res) => {
    controller.addManicura(req.body)
    .then((manicura) => response.success(req, res, manicura, 201))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.patch ('/:id', (req, res) => {
    const id = req.params.id;
    const change = req.body;
    controller.updateManicura(id, change)
    .then((changeServicio) => response.success(req, res, changeServicio, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.delete ('/:id', (req, res) => {
    const id = req.params.id;
    controller.deleteManicura(id)
    .then((deleted) => response.success(req, res, deleted, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

module.exports = router;