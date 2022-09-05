let number = 3;
let answer = number % 2;

switch (answer) {
  case 0:
    console.log("Even");
    break;
  case 1:
    console.log("Odd");
    break;
}

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
