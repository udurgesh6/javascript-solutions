function Employee(name, age, basicSal) {
  this.name = name;
  this.age = age;
  this.basicSal = basicSal;
  let bonus = 3000;
  this.calFinalSal = function () {
    console.log(basicSal + bonus);
  };
  this.displayInfo = function () {
    console.log(this.name + " " + this.age);
  };
}

emp1 = new Employee("Jack", 25, 5000);
emp1.bonus = 50000;
emp1.calFinalSal();
