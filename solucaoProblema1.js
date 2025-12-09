const DoublyLinkedList = require("./listaDuplamenteEncadeada.js");
const Browser = new DoublyLinkedList();
Browser.insert(2)
Browser.insert(3)
Browser.insert(4)
class BrowserHistory{
    constructor(){
        this.history = Browser;
    }

        visit(){
            if(this.history.currentNode != this.history.tail){
                let previous = this.history.currentNode.prev
                previous = previous.element
                Browser.clearFrom(previous)
            }

            
        }
    
        back(){
           
           if(this.history.head != this.history.currentNode){
            Browser.currentNode = Browser.getPrev(Browser.currentNode.element)
            return true;
           }
           else{
            return undefined;
           }
        }
        forward(){
           if(this.history.tail != this.history.currentNode){
            Browser.currentNode = Browser.getNext(Browser.currentNode.element)
            return true;
           }
           else{
            return undefined;
           }
        }
        current(){
            return Browser.currentNode
        }

}
const history = new BrowserHistory()
history.forward()
console.log(history.visit())
console.log(history)
