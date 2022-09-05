let a = 1,
  b = 1;
let pos = 15;
let c = 0; // 0
// 1 1 2 3 5 8 13 21
if (pos < 3) {
  console.log(1);
} else {
  for (let i = 3; i <= pos; i++) {
    // 5
    c = a + b; // 5
    a = b; // a = 3
    b = c; // b = 5
  }
}
console.log(c);
