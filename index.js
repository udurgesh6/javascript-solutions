// string, number, object, boolean, null, undefined

/*
Hello
snaknkdj
dwsnqnqkl
fdwnwmlfenfwel
*/
var customer_last_name = "XYZ"; // declaring and assigning
var customer_last_name = "XCYUI"; // declaring and assigning

let customerName = 'Dur"gesh'; // declaring and assigning
customerName = "Ritesh"; // assigning

const customer_age = 27; // read only // declaring and assigning

let num1 = 2;
let num2 = 8;
let result = num1 ** num2;

num1 = num1 + 3;
num1 += 3;
num1 -= 1;
num1 *= 4;
num1 /= 5;

let my_decimal = 3.5;

let name1 = "Durgesh",
  name2 = "Upadhyay",
  space = " ";

let fullname = name1 + "eee " + name2;

let occupation = "developer";

occupation[0] = "b";
occupation = "beveloper";

let arr = ["Durgesh", 1, true, false, ["Name", 34, [1, 4]]];

const obj = {
  name: "Scorpio",
  Tyres: 4,
  Color: "grey",
};
let nt = "name";

let names = ["Durgesh", "Diana", "Rahul"];
names[2] = "ELement";

function getMyFullName(fname, lname) {
  let full_name = fname + " " + lname;
  return full_name;
}

let fullName = getMyFullName("Durgesh", "Upadhyay");

let myNumber = 3;
if (myNumber % 2 === 0) {
  console.log("Its even");
} else {
  console.log("Its odd");
}

let myName = "Durgesh";
if (myName === "Durgesh") {
  console.log("Hey");
} else if (myName === "Ritesh") {
  console.log("Bye");
} else {
  console.log("Hello");
}

let myLukcyNumber = 3;

switch (myLukcyNumber) {
  case 1:
  case 2:
  case 3:
    console.log("Lucky");
    break;
  case 4:
  case 5:
  case 6:
    console.log("UnLucky");
    break;
  default:
    console.log("Normal");
}

let arrEmp = [
  { EmpName: "Emp1", location: "Mumbai", Desig: "SDE" },
  { EmpName: "Emp2", location: "Chennai", Desig: "Barber" },
  { EmpName: "Emp3", location: "Pune", Desig: "SDE" },
  { EmpName: "Emp4", location: "Bangalore", Desig: "Carpenter" },
  { EmpName: "Emp5", location: "Delhi", Desig: "SDE" },
];

for (let i = 0; i < arrEmp.length; i++) {
  console.log(arrEmp[i].Desig);
  if (arrEmp[i].Desig === "SDE") {
    console.log("You should be fixing your code");
  } else if (arrEmp[i].Desig === "Barber") {
    console.log("You should be in Saloon");
  } else {
    console.log("You should be fixing cupboards");
  }
}

let theNumber = 1;
while (theNumber !== 5) {
  console.log("Learning Javascript");// 1 2 3 4
  theNumber++;
}
