class Counter {
  constructor(n) {
    this.counter = n - 1;
  }

  next() {
    let toreturn = this.counter + 1;
    this.counter = this.counter + 1;
    return toreturn;
  }
}

let myCounter = new Counter(1);
console.log(myCounter.next());
console.log(myCounter.next());
console.log(myCounter.next());