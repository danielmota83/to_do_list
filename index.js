const express = require('express');
const cors = require('cors');
const tarefaRoutes = require('./src/routes/tarefas.routes');

const port = 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/tarefas', tarefaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
