const tarefasService = require('../service/tarefas.services');

const initialController = (req, res) => {
  const response = tarefasService.initialService();
  res.send(response);
};

const findAllTarefas = (req, res) => {
  res.send(tarefasService.findAllTarefas());
};

const findTarefaById = (req, res) => {
  const id = parseInt(req.params.id);
  const response = tarefasService.findTarefaById(id);
  if (response === undefined) {
    res.status(204).send({ message: 'Nenhuma tarefa encontrada' });
  } else {
    res.send({ message: 'Tarefa encontrada com sucesso', response });
  }
};

const createTarefa = (req, res) => {
  const tarefa = req.body;
  if (
    tarefa.descricao === '' ||
    tarefa.tarefa === '' ||
    tarefa.lembrarDe === '' ||
    tarefa.horario === ''
  ) {
    res.status(400).send({ message: 'Dados da tarefa incompletos' });
  }
  const response = tarefasService.createTarefa(tarefa);
  res.send({ message: 'Tarefa criada com sucesso', data: response });
};

const updateTarefa = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTarefa = req.body;
  const response = tarefasService.updateTarefa(id, updatedTarefa);
  if (response !== undefined) {
    res.send({ message: 'Tarefa Atualizada com sucesso', data: response });
  } else {
    res.send({ message: 'Tarefa não foi encontrada' });
  }
};

const deleteTarefa = (req, res) => {
  const id = parseInt(req.params.id);
  const response = tarefasService.deleteTarefa(id);
  res.send(response);
};

module.exports = {
  initialController,
  findAllTarefas,
  findTarefaById,
  createTarefa,
  updateTarefa,
  deleteTarefa,
};
