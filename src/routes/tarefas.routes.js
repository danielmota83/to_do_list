const express = require('express');
const tarefasController = require('../controllers/tarefas.controllers');
const router = express.Router();

router.get('/', tarefasController.initialController);
router.get('/allTarefas', tarefasController.findAllTarefas);
router.get('/tarefaById/:id', tarefasController.findTarefaById);
router.post('/createTarefa', tarefasController.createTarefa);
router.put('/updateTarefa/:id', tarefasController.updateTarefa);
router.delete('/deleteTarefa/:id', tarefasController.deleteTarefa);

module.exports = router;
