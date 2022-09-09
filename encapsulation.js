class Student {
  constructor() {
    let name, age;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getAge() {
    return this.age;
  }
  setAge(age) {
    this.age = age;
  }
}

let stu1 = new Student();
stu1.setName("Durgesh");
console.log(stu1.getName());
