function fibonacci(num) {
  if (num < 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

// take nth term input from the user
const nTerms = 4;

if (nTerms < 0) {
  console.log("Enter a positive integer.");
} else {
  console.log(fibonacci(nTerms));
}
