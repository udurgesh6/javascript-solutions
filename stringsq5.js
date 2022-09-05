let main = "Durgesh";
let pos = 3,
  toInsert = "Upa";

if (pos >= main.length - 1) {
  console.log(main + toInsert);
} else {
  console.log(main.slice(0, 3) + toInsert + main.slice(3));
}
