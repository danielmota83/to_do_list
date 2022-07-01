const express = require('express');
const cors = require('cors');
const tarefaRoutes = require('./src/routes/tarefas.routes');

const connectToDatabase = require('./src/database/mongoConnection')

const port = 3000;
const app = express();

app.use(cors());

connectToDatabase();

app.use('/tarefas', tarefaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
