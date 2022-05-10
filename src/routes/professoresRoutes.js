var express = require('express');
var router = express.Router();

const ControllersProfessores = require('../controllers/professoresControlles')


// define the home page route
router
    .get('/', ControllersProfessores.pegarDados)
    .get('/:id', ControllersProfessores.pegarDadoId)
    .post('/', ControllersProfessores.addDado)
    .delete('/:id', ControllersProfessores.deletarDado)
    .put('/:id', ControllersProfessores.editarDado)


module.exports = router;