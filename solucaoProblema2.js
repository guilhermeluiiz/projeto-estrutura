const CircularLinkedList = require("./listaCircular.js");
const ToDoList = new CircularLinkedList();
class TaskScheduler {
  constructor() {
    this.list = ToDoList;
  }
  addTask(name) {
    ToDoList.insert(name);
    return true;
  }
  removeTask(name) {
    ToDoList.remove(name);
    return true;
  }
  nextTask() {
    ToDoList.getCurrent();
    return true;
  }
  currentTask() {
    return this.list.currentNode;
  }
}
const task = new TaskScheduler();
task.addTask("correr");
task.addTask("estudar");
task.addTask("assistir tv");
task.nextTask();
task.removeTask("estudar");
task.removeTask("correr");
task.removeTask("assistir tv");
//task.nextTask();
console.log(task);
