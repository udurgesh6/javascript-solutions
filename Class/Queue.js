class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length > 0) {
      return this.items.shift();
    } else {
      return null;
    }
  }
  size() {
    return this.items.length;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.size());