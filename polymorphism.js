class cat {
  howManyLegs() {
    console.log(4);
  }
  speak() {
    console.log("meow");
  }
}

class Dog extends cat {
  speak() {
    console.log("bark");
  }
}

let dog = new Dog();
dog.speak();
