const express = require('express');
const router = express.Router();
const tasks = require('../data/tasks');

// Получить все задачи
router.get('/', (req, res) => {
  res.json(tasks.getAll());
});

// Добавить новую задачу
router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Поле title обязательно' });
  }
  const task = tasks.add(title);
  res.status(201).json(task);
});

// Отметить задачу выполненной
router.put('/:id/done', (req, res) => {
  const id = parseInt(req.params.id);
  const updated = tasks.markDone(id);
  if (!updated) {
    return res.status(404).json({ error: 'Задача не найдена' });
  }
  res.json(updated);
});

module.exports = router;
