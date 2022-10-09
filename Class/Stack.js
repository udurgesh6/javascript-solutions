class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) return null;
    return this.items.pop();
  }
  tos() {
    if (this.items.length == 0) return null;
    return this.items[this.items.length - 1];
  }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.tos());
console.log(myStack.tos());