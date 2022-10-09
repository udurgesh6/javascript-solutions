function factorial(x) {
  // if number is 0
  if (x == 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

// take input from the user
const num = 3;

// calling factorial() if num is positive
if (num >= 0) {
  const result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
} else {
  console.log("Enter a positive number.");
}
