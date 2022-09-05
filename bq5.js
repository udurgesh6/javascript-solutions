let num = 7;
let current_multiple = num;
let multiples = [7];
while (current_multiple <= 100) {
  current_multiple += num;
  if (current_multiple <= 100) {
    multiples.push(current_multiple);
  }
}
console.log(multiples);
