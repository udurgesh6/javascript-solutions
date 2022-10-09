var itemsToBuy = {
  milk: {
    quantity: 5,
    price: 20,
  },
  bread: {
    quantity: 2,
    price: 15,
  },
  potato: {
    quantity: 3,
    price: 10,
  },
};
let arr1 = [],
  arr2 = [];
for (let key in itemsToBuy) {
  arr1.push(key);
  arr2.push(itemsToBuy[key]["quantity"]);
}
console.log(arr1);
console.log(arr2);
