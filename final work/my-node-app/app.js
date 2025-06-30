const express = require('express');
const app = express();
const todosRoutes = require('./routes/todos');

app.use(express.json());

app.use('/todos', todosRoutes);

app.get('/', (req, res) => {
  res.send('Добро пожаловать в Todo API!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
