// let computer = {
//   nameOf: "HP",
//   model: 2012,
//   shutDown: function () {
//     return "Will Restart";
//   },
//   Address: {
//     street: "Road No. 10",
//     Area: "Gachibowli",
//   },
//   getAddress: function () {
//     return this.Address.street + " ," + this.Address.Area;
//   },
//   details: ["sw",34, true, {}],
// };

// console.log(computer.details);

// obj1 = { a: 1, b: 2 };
// obj2 = { c: 3 };
// obj3 = { d: 4, ...obj1, c: 5, ...obj2 };
// console.log(obj3);

const object = { a: 1, b: 2, c: 3 };
object["a"] = "jsdh";
for (const key in object) {
  //console.log(property);
  console.log(`${key}: ${object[key]}`);
}
