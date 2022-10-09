let arr = [1, 2, 3, 1, 4, 2];
let ansArr = [];

for (let i = 0; i < arr.length; i++) {
  if (!ansArr.includes(arr[i])) {
    ansArr.push(arr[i]);
  }
}
console.log(ansArr);
