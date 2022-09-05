let number = 8;
if (number === 1) {
  console.log("1 is neither prime nor composite");
} else {
  // > 1 ...... < 8
  let current_number = 2;
  while (current_number < number) {
    if (number % current_number === 0) {
      console.log("The provided number is not prime");
      break;
    } else {
      current_number += 1;
    }
  }
  if (current_number === number) {
    console.log("Its a prime number");
  }
}
