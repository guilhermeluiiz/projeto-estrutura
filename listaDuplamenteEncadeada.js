 class DoublyLinkedNode{
    constructor(element){
        this.element = element;
        this.prev = undefined;
        this.next = undefined;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = undefined;
        this.tail = undefined;
        this.currentNode = undefined
        this.count=0
    }
    insert(value) {
    const newNo = new DoublyLinkedNode(value);
    if (this.isEmpty()) {
      this.head = newNo;
      this.tail = newNo;
      this.currentNode = newNo
      this.count ++;
    } else{
        let current = this.head;
        while(current.next != undefined){
            current = current.next;
        }
        current.next = newNo
        newNo.prev = current;
        this.tail = newNo;
        this.count ++;
        return true;
    }
  }
    remove(node){
        if(this.size() == 1){
            this.head = undefined;
            this.prev = undefined;
            this.tail = undefined;
            this.currentNode = undefined
        }
       else{
         if(node == this.head.element){
            this.head = this.head.next
            this.head.prev = undefined;
            
        }else{
             let current = this.head;
        while(current.element != node){
            current = current.next
        } 
            let previous = current.prev;
        if(node == this.tail.element){
            this.tail = previous;
            this.tail.next = undefined
            this.currentNode = this.currentNode.prev
        }
        else{
            
            previous.next = current.next;
            current = current.next;
            current.prev = previous;
        }
        }
       }
        this.count --;
    }
    getNext(node){
        if(node != this.tail.element){
            let current = this.head
        while(current.element != node){
            current = current.next;

        }
        return current.next;
        }else{
            return undefined;
        }
    }
    getPrev(node){
        let current = this.head
        while(current.element != node){
            current = current.next;

        }
        return current.prev;
    }
    size() {
    return this.count;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clearFrom(node){
    let current = this.head
    this.count = 1
    while(node != current.element){
        current = current.next
        this.count ++;

    }
    current.next = undefined;
    this.tail = current;
  }
}

module.exports = DoublyLinkedList;