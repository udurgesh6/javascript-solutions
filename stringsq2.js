let str = "abAB";
let arr = str.split("");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i].toLowerCase()) {
    arr[i] = arr[i].toUpperCase();
  } else {
    arr[i] = arr[i].toLowerCase();
  }
}
console.log(arr.join(""));
