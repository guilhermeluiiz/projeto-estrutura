const no = require("./node.js");

class CircularLinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.currentNode = null;
  }
  insert(task) {
    const newNo = new no(task);
    if (this.head === null) {
      this.head = newNo;
      this.currentNode = newNo;
      this.tail = newNo;
      this.tail.next = newNo;
      this.count = 0;
    } else {
      let current = this.head;
      for (let i = 0; i < this.size() - 1; i++) {
        current = current.next;
      }
      current.next = newNo;
      this.tail = newNo;
      this.tail.next = this.head.data;
    }
    this.count++;
  }

  remove(task) {
    if (task == this.head.data) {
      let current = this.head;
      this.head = current.next;
      this.tail.next = this.head.data;
      current = current.next;
      this.currentNode = current;
      this.count--;
    }
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.size() === 0;
  }
}

const linkedList = new CircularLinkedList();
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(5);
console.log(JSON.stringify(linkedList.size));
