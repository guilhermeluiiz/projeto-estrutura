const no = require("./node.js");

function defaultEquals(a, b) {
  return a === b;
}

class CircularLinkedList {
  constructor(equalsFn = defaultEquals) {
    this.equalsFn = equalsFn;
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
  size() {
    return this.count;
  }
}

const linkedList = new CircularLinkedList();
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(5);
console.log(JSON.stringify(linkedList));
