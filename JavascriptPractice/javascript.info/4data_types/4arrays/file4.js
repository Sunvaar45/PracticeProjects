"use strict";

// length - its not the count. its the last index + 1
let arr = [];
arr[123] = "a";
alert( arr.length ); // 124

// changing the length also truncates the array
arr.length = 0; // easiest way to clear an array


// multidimensional arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
alert( matrix[0][1] ); // 2


// toString
let arr2 = [1, 2, 3];

alert( String(arr2) === `1,2,3` ); // true