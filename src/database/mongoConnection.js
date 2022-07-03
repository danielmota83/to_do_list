const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1/tarefas-db';

function connectToDatabase() {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB conectado com sucesso!'))
    .catch((error) =>
      console.log(`error ao conectar com MongoDb, erro: ${error}`),
    );
}

module.exports = connectToDatabase;
