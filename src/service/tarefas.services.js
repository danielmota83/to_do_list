
const Tarefa =  require('../models/Tarefa')

const findAllTarefas = async() => {
  const allTarefas = await Tarefa.find();
  return allTarefas;
 };

const findTarefaById = async(id) => {
  const oneTarefa = await Tarefa.findById(id)
        return oneTarefa;
      };

 
const createTarefa = async(tarefa) => {
  const createTarefa = await Tarefa.create(tarefa);
  return createTarefa;
};

const updateTarefa = async (id, updatedTarefa) => {
  const updateTarefa = await Tarefa.findByIdAndUpdate(
    id,
    updatedTarefa,
  ).setOptions({ returnOriginal: false });
  return updateTarefa;
};

const deleteTarefa = async (id) => {
  return await Tarefa.findByIdAndDelete(id);
};

const initialService = () => {
  return 'hello world';
};

module.exports = {
  initialService,
  findAllTarefas,
  findTarefaById,
  createTarefa,
  deleteTarefa,
  updateTarefa,
};
