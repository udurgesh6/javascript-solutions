let text = "Visit w3Schools w3Schools";
let n = text.search("W3Schools");
console.log(n);
let n1 = text.search(/W3Schools/);
console.log(n1);

let text1 = "Visit Microsoft";
console.log(text1.replace("Microsoft", "W3Schools"));
console.log(text1.replace(/Microsoft/i, "W3Schools"));

let text3 = "hello hello hello";
console.log(text3.match(/[hel]/g));

let text4 = "1234ghi78";
console.log(text4.match(/[1-9]/g));

let text5 = "red green yellow red";
console.log(text5.match(/(red|green)/g));

let text6 = "1hdejdhwkj67jfj";
console.log(text6.match(/\d/g));

console.log(text5.match(/\s/g));
