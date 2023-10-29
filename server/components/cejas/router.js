const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index');

router.get('/', (req, res) => {
        // controller.getOnlyEyebrows(req.query.title)
        // .then((titleEyebrow) => response.success(req, res, titleEyebrow, 200))
        // .catch((error) => response.error(req, res, 'Internal Error', 500, error))

    controller.getServicesEyebrows()
        .then((eyebrows) => response.success(req, res, eyebrows, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.get('/:id', (req, res) =>{
    console.log(req.params.id)
        controller.getOnlyEyebrowById(req.params.id)
        .then((idEyebrow) => response.success(req, res, idEyebrow, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.post ('/', (req, res) => {
    controller.addEyebrows(req.body)
    .then((eyebrows) => response.success(req, res, eyebrows, 201))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.patch ('/:id', (req, res) => {
    const id = req.params.id;
    const change = req.body;
    controller.updateEyebrows(id, change)
    .then((changeServicio) => response.success(req, res, changeServicio, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

router.delete ('/:id', (req, res) => {
    const id = req.params.id;
    controller.deleteEyebrows(id)
    .then((deleted) => response.success(req, res, deleted, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error))
})

module.exports = router;