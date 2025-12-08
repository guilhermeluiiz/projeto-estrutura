const CircularLinkedList = require("./circulateList.js");
const linkedList = new CircularLinkedList();
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.getCurrent();
console.log(linkedList);