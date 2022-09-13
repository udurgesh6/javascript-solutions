let text = "Visit W3Schools!";
let n = text.search("W3Schools");
console.log(n);
let n1 = text.search(/W3schools/i);
console.log(n1);

let text1 = "Visit Microsoft!";
let result = text1.replace("Microsoft", "W3Schools");
console.log(result);
let text2 = "Visit Microsoft!";
let result2 = text2.replace(/microsoft/i, "W3Schools");
console.log(result2);

// find strings
let text3 = "hello Hello hello";
let result3 = text3.match(/[he]/g);
console.log(result3);

// find numbers
let text4 = "1234567890";
let result4 = text4.match(/[1-4]/g);
console.log(result4);

// find any alternative chcarcters or words
let text5 = "red green yellow red";
let result5 = text5.match(/(red|green)/g);
console.log(result5);

// find a digit
let text6 = "1sfe34vdfd45";
let result6 = text6.match(/\d/g);
console.log(result6);

// find a whitespace
let text7 = "hello hello";
let result7 = text7.match(/\s/g);
console.log(result7);

// Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b
let text8 = "hello hello";
let result8 = text8.match(/\bhel/g);
console.log(result8);

//Matches any string that contains at least one n
let text9 = "hello helloo";
let result9 = text9.match(/o+/g);
console.log(result9);

//Matches any string that contains zero or more occurrences of n
let text10 = "hello helloo";
let result10 = text10.match(/lo*/g);
console.log(result10);

/*You can complement (invert) the character set by using caret ^ symbol at the start of a square-bracket.

[^abc] means any character except a or b or c.

[^0-9] means any non-digit character.*/

// The caret symbol ^ is used to check if a string starts with a certain character.

// The dollar symbol $ is used to check if a string ends with a certain character.
