let obj1 = {
  f: "Durgesh",
  l: "Upadhyay",
};
let opName = function (place, age) {
  console.log(this.f + " " + this.l + " from " + place + " and ages is " + age);
};

let obj2 = {
  f: "Ritesh",
  l: "Saxena",
};

opName.call(obj1, "Dehradun", 24);
opName.apply(obj2, ["Mumbai", 34]);

let printMyName = opName.bind(obj2, "Pune", 36);
printMyName();
