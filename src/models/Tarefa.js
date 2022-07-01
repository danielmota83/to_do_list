const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
    tarefa: {type: String, require: true},
    lembrarDe: {type: String, require: true},
    descricao: {type: String, require: true},
    horario: {type: Number, require: true},
});

const Tarefa = mongoose.model('tarefas', TarefaSchema);

module.exports = Tarefa;
