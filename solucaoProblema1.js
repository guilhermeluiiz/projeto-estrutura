const DoublyLinkedList = require("./listaDuplamenteEncadeada.js");
const Browser = new DoublyLinkedList();

class BrowserHistory {
  constructor() {
    this.history = Browser;
  }

  visit(URL) {
    if (this.history.currentNode != this.history.tail) {
      Browser.clearFrom(this.history.currentNode.element);
    }
    Browser.insert(URL);
  }

  back() {
    if (this.history.head != this.history.currentNode) {
      Browser.currentNode = Browser.getPrev(Browser.currentNode.element);
      return true;
    } else {
      return undefined;
    }
  }
  forward() {
    if (this.history.tail != this.history.currentNode) {
      Browser.currentNode = Browser.getNext(Browser.currentNode.element);
      return true;
    } else {
      return undefined;
    }
  }
  current() {
    return Browser.currentNode;
  }
}
const history = new BrowserHistory();
history.visit("www.YouTube.com");
history.visit("www.GitHub.com");
history.visit("www.Google.com");
history.visit("www.ClassRoom.com");
history.back();
history.back();
history.visit("www.teste.com")
console.log(history);
