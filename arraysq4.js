let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 3;
k = k > arr.length ? k % arr.length : k;

arr = [...arr.slice(k)].concat(arr.slice(0, k));
console.log(arr);
