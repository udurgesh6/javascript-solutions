let arr = [
  [1, 2, 3],
  [4, -5, 6],
  [-7, -8, 9],
];

let ansArr = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    if (arr[i][j] < 0) {
      ansArr.push(arr[i][j]);
    }
  }
}
console.log(ansArr);
