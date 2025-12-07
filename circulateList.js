const no = require("./node.js");

class CircularLinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.currentNode = null;
    this.count = 0;
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
      this.tail.next = this.head;
    }
    this.count++;
  }

  remove(task) {
   if(this.size() == 1){
    this.head = null;
    this.currentNode = null;
    this.tail = null;
    this.count = 0;
   }
   if(task == this.head.data){
     if(this.head == this.currentNode){
      this.getCurrent();
    } 
    this.head = this.head.next; 
    this.tail.next = this.head;
    this.count --;
   }
  if (task == this.currentNode.data){
    
  if(this.currentNode != this.tail){
     let current = this.head;
   while(current.next != this.currentNode){
    current = current.next;
   }
   
    current.next = this.currentNode.next;
    this.getCurrent();
    this.count --;
  }
   }
 
   if (task == this.tail.data){
   let current = this.head;
   while(current.next != this.tail){
    current = current.next;
   }
   if(this.currentNode == this.tail){
    this.getCurrent();
   }
    this.count --;
    this.tail  = current;
    current.next = this.head;
    return true;
   }

  }
  getCurrent(){
    this.currentNode = this.currentNode.next;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear(){
    this.head = undefined;
    this.currentNode = undefined;
    this.tail = undefined;
    this.count = 0;
  }
}

const linkedList = new CircularLinkedList();
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(5);
linkedList.getCurrent();
linkedList.remove(2);
linkedList.getCurrent();
linkedList.remove(5);
linkedList.remove(4);
console.log(linkedList);