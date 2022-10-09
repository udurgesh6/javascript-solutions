let arr = [1, 2, 3, -1, 4, -2, 6];
let negArr = arr.filter((a) => a < 0);
let posArr = arr.filter((a) => a >= 0);
console.log(negArr.concat(posArr));
