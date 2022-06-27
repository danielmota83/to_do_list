const { v4: uuidv4 } = require('uuid');

const tarefas = [
  {
    id: 1,
    tarefa: 'Atividade física',
    lembrarDe:
      'Colocar o relógio para despertar. ',
    descricao: 'corrida e exercícios ao ar livre',
    horario: 5.30,
  },
  {
    id: 2,
    tarefa: 'Dar aulas de física',
    lembrarDe:
      'Pegar todos os materias para as aulas ',
    descricao: 'Aulas de física para as turmas do 1º e 3º anos do ensino médio',
    horario: 7.00,
  },
  {
    id:3,
    tarefa: 'Estudar Programação',
    lembrarDe:
      'Revisar o conteúdo da aula anterior.',
    descricao: 'Aulas de desenvolvimento full stack da BlueEdTech.',
    horario: 19.00,
  },
];

const findAllTarefas = () => tarefas;

const findTarefaById = (id) => {
  let indice = 0;
  const tarefaById = tarefas.map((tarefa, index) => {
    if (tarefa.id === id) {
      indice = index;
      return tarefa;
    }
  });
  
  return tarefaById[indice];
};

const createTarefa = (tarefa) => {
  tarefa.id = uuidv4();
  tarefas.push(tarefa);
  return tarefas;
};

const updateTarefa = (id, updatedTarefa) => {
  tarefas.forEach((tarefa, index) => {
    if (tarefa.id === id) {
      updatedTarefa.id = id;
      tarefa[index] = updatedTarefa;
    }
  });
  return tarefas;
};

const deleteTarefa = (id) => {
  tarefas.forEach((tarefa, index) => {
    if (tarefa.id === id) {
      tarefas.splice(index, 1);
    }
  });
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
  updateTarefa
};
