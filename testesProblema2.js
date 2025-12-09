const CircularLinkedList = require("./listaCircular.js");
const teste = new CircularLinkedList();
//método insert uma nova tarefa na lista de forma circular.
teste.insert(2);
teste.insert(3);
teste.insert(4);
teste.remove(3); //método "remove" remove a tarefa especificada da lista.
teste.remove(2);
teste.remove(4);
//console.log(teste.getCurrent()); //Retorna a tarefa atualmente apontada por currentNode.
//console.log(teste.isEmpty()); //Retorna se a lista for vazia.
//console.log(teste.size()); Retorna o número total de nós presentes na lista circular.
//console.log(teste.clear());Remove todos os elementos da lista.
console.log(teste);