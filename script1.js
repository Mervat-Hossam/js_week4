// Assignments For Lessons 71 To 78

// Assignment 1
console.log("Assignment 1");
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let solution = mix.map(function (ele) {
    return isNaN(ele) ? ele : "";
}).reduce(function (acc, current) {
    return `${acc}${current}`;
});
// Elzero
console.log(solution);

/*----------------------------------------------------------------------------- */
// Assignment 2
console.log("Assignment 2");
let myString = "EElllzzzzzzzeroo";

let final = myString.split("").filter(function (ele, i) {
    return myString.indexOf(ele) === i; 
}).join("");
// Elzero
console.log(final);

/*----------------------------------------------------------------------------- */
// Assignment 3
console.log("Assignment 3");
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let finalString = myArray.reduce(function (acc, current) {
    return `${acc}${current}`;
}).split("").filter(function (ele) {
    return !(ele === ',')
}).reduce(function (acc, current) {
    return `${acc}${current}`;
});
// Elzero
console.log(finalString);

/*----------------------------------------------------------------------------- */
// Assignment 4
console.log("Assignment 4");
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let invert = numsAndStrings.filter(function (ele) {
    return !(isNaN(ele));
}).map(function (ele) {
    return -ele;
});
// [-1, -10, 10, 20, -5, -3]
console.log(invert);

/*----------------------------------------------------------------------------- */
// Assignment 5
console.log("Assignment 5");
let nums = [2, 12, 11, 5, 10, 1, 99];
let result = nums.reduce(function (acc, current) {
    return current % 2 ? acc + current : acc * current;
}, 1);
// 500
console.log(result);