const express = require('express');
const tarefasController = require('../controllers/tarefas.controllers');
const router = express.Router();

const { validId, validObjectBody } = require('../middlewares/tarefas.middleware');

router.get('/', tarefasController.findAllTarefas);
router.get('/:id', validId, tarefasController.findTarefaById);
router.post('/', validObjectBody, tarefasController.createTarefa);
router.put('/:id', validId, validObjectBody,tarefasController.updateTarefa);
router.delete('/:id', validId,tarefasController.deleteTarefa);

module.exports = router;
