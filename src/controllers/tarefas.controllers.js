const tarefasService = require('../service/tarefas.services');
const validationService = require('../service/validation.services');
const mongoose = require('mongoose');

const initialController = (req, res) => {
  const response = tarefasService.initialService();
  res.send(response);
};

const findAllTarefas = async (req, res) => {
  const allTarefas = await tarefasService.findAllTarefas();

  if (allTarefas.length == 0) {
    return res
      .status(206)
      .send({ message: 'Não existe nenhuma tarefa cadastrada!' });
  }

  res.send(allTarefas);
};

const findTarefaById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const response = await tarefasService.findTarefaById(id);
  
  if (!response) {
    res.status(206).send({ message: 'Nenhuma tarefa encontrada' });
  } else {
    res
      .status(200)
      .send({ message: 'Tarefa encontrada com sucesso', data: response });
  }
};

const createTarefa = async (req, res) => {
  const tarefa = req.body;

  if (
    !tarefa ||
    !tarefa.tarefa ||
    !tarefa.lembrarDe ||
    !tarefa.descricao ||
    !tarefa.horario
  ) {
    return res.status(400).send({
      message:
        'Você não preencheu todos os dados para adicionar uma nova tarefa à To do List!',
    });
  }

  const newTarefa = await tarefasService.createTarefa(tarefa);

  res.send(newTarefa);
};


const updateTarefa = async (req, res) => {
  const id = req.params.id;
  const tarefaEdit = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const chosenTarefa = await tarefasService.findTarefaById(id);

  if (!chosenTarefa) {
    return res.status(206).send({ message: 'Tarefa não encontrada!' });
  }

  if (
    !tarefaEdit ||
    !tarefaEdit.tarefa ||
    !tarefaEdit.lembrarDe ||
    !tarefaEdit.descricao ||
    !tarefaEdit.horario
  ) {
    return res.status(400).send({
      message: 'Você não preencheu todos os dados para editar a tarefa!',
    });
  }

  const updatedTarefa = await tarefasService.updateTarefa(id, tarefaEdit);

  res.send(updatedTarefa);
};

const deleteTarefa = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const chosenTarefa = await tarefasService.findTarefaById(id);

  if (!chosenTarefa) {
    return res.status(206).send({ message: 'Tarefa não encontrada!' });
  }

  await tarefasService.deleteTarefa(id);

  res.status(204).send();
};

module.exports = {
  initialController,
  findAllTarefas,
  findTarefaById,
  createTarefa,
  updateTarefa,
  deleteTarefa,
};
