"use strict";

// reduce
let arr = [1, 2, 3];
let result = arr.reduce(function(sum, current) {
    return sum + current;
}, 0);

let shortResult = arr.reduce((sum, current) => sum + current, 0);

// reduceRight - does the same thing but right to left


// Array.isArray
// typeof doesn't work correctly with arrays
alert( typeof {} ); // object
alert( typeof [] ); // object :(

alert( Array.isArray({}) ); // false
alert( Array.isArray([]) ); // true :)


// thisArg