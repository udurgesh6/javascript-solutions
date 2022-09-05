let str = "hello";
let arr = str.split("");
console.log(arr);
console.log(str[0] === str[0].toLowerCase());
console.log(arr.join(""));

console.log(parseInt("23"));

if (parseInt("23s")) {
  console.log(parseInt("23s"));
  console.log("Number");
} else {
  console.log("Nan");
}
