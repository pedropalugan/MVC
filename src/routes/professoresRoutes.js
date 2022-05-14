var express = require('express');
var router = express.Router();

const ControllersProfessores = require('../controllers/professoresControlles')


//Making the 'express' verbs using "ControllersProfessores" class's functions
router
    .get('/', ControllersProfessores.pegarDados)
    .get('/:id', ControllersProfessores.pegarDadoId)
    .post('/', ControllersProfessores.addDado)
    .delete('/:id', ControllersProfessores.deletarDado)
    .put('/:id', ControllersProfessores.editarDado)


module.exports = router;
