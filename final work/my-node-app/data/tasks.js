let list = [];
let counter = 1;

function getAll() {
  return list;
}

function add(title) {
  const task = { id: counter++, title, done: false };
  list.push(task);
  return task;
}

function markDone(id) {
  const task = list.find(t => t.id === id);
  if (!task) return null;
  task.done = true;
  return task;
}

module.exports = {
  getAll,
  add,
  markDone
};
