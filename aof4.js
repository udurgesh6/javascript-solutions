let num = "95673217";
let largestNum = parseInt(num[0]); //4
for (let i = 1; i < num.length; i++) {
  if (largestNum < parseInt(num[i])) {
    //7
    largestNum = parseInt(num[i]); //7
  }
}
console.log(largestNum);
