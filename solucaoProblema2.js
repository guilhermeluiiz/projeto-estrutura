const CircularLinkedList = require("./circulateList.js");
const ToDoList = new CircularLinkedList();
class TaskScheduler{
    constructor(){
       this.list=undefined;

    }
    addTask(name){
       ToDoList.insert(name);
       this.list = ToDoList;
      return true; 
    }
    removeTask(name){
        ToDoList.remove(name);
        return true;
    }
    nextTask(){
        ToDoList.getCurrent();
        return true;
    }
    currentTask(){
        return ToDoList.currentNode;
    }
}
const task = new TaskScheduler()
task.addTask("correr");
task.addTask("estudar");
task.addTask("assistir tv")
task.nextTask()
task.nextTask()
task.removeTask("assistir tv");
console.log(task.currentTask());
console.log(task);