const tarefasService = require('../service/tarefas.services');

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

  const tarefa = await tarefasService.findTarefaById(id);

  if (!tarefa) {
    res.status(206).send({ message: 'Nenhuma tarefa encontrada' });
  } else {
    res
      .status(200)
      .send({ message: 'Tarefa encontrada com sucesso', data: tarefa });
  }
};

const createTarefa = async (req, res) => {
  const tarefa = req.body;

  const newTarefa = await tarefasService.createTarefa(tarefa);

  res.status(201).send(newTarefa);
};

const updateTarefa = async (req, res) => {
  const id = req.params.id;
  const tarefaEdit = req.body;

  const chosenTarefa = await tarefasService.findTarefaById(id);

  if (!chosenTarefa) {
    return res.status(206).send({ message: 'Tarefa não encontrada!' });
  }

  const updatedTarefa = await tarefasService.updateTarefa(id, tarefaEdit);

  res.send(updatedTarefa);
};

const deleteTarefa = async (req, res) => {
  const id = req.params.id;

  const chosenTarefa = await tarefasService.findTarefaById(id);

  if (!chosenTarefa) {
    return res.status(206).send({ message: 'Tarefa não encontrada!' });
  }

  await tarefasService.deleteTarefa(id);

  return res.status(204).send({ message: 'Tarefa deletada!' });
};

module.exports = {
  findAllTarefas,
  findTarefaById,
  createTarefa,
  updateTarefa,
  deleteTarefa,
};
