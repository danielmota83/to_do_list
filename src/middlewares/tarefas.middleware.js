const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido' });
  }

  next();
};

const validObjectBody = (req, res, next) => {
  const tarefa = req.body;

  if (
    !tarefa ||
    !tarefa.oQueFazer ||
    !tarefa.lembrarDe ||
    !tarefa.descricao ||
    !tarefa.horario
  ) {
    return res.status(400).send({
      message:
        'Você não preencheu todos os dados para adicionar uma nova tarefa à To do List!',
    });
  }

  next();
};

module.exports = { validId, validObjectBody };
