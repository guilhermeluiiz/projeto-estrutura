const DoublyLinkedList = require("./listaDuplamenteEncadeada.js");
const teste = new DoublyLinkedList();
//método insert adiciona NÓ dentro da lista.
teste.insert(2);
teste.insert(3);
teste.insert(4);
teste.insert(5);
//teste.remove(4);  //Método "remove" remove nó de dentro da lista.
//teste.remove(5);
//teste.remove(3);
//teste.remove(2);
//teste.clearFrom(2); //clearFrom vai remover nó(s) a partir de um nó.
//console.log(teste.getNext(3)); // vai retornar o próximo nó a partir de um elemento de um nó.
//console.log(teste.getPrev(3)); //vai retornar o nó anterior partir de um elemento de um nó.
//console.log(teste.isEmpty()); //Retorna se a lista está vazia.
//console.log(teste.size()); //retorna a quantidade de elementos.
console.log(teste);
