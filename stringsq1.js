let str = "4bcdABCD";
let char = "a";

char = char.toUpperCase();

let count = 0;
for (let i = 0; i < str.length; i++) {
  console.log(str[i].toUpperCase());
  if (char === str[i].toUpperCase()) {
    count++;
  }
}
console.log(count);
