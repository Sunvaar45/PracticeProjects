"use strict";

let arr = ["I", "go", "home"];

// splice(startIndex, deleteCount, elem1, ..., elemN)
let removed = arr.splice(2, 1, "to", "work", ":(");

alert( removed ); // home
alert( arr ); // I, go, to, work

    // splice can insert elements without removing by setting deleteCount = 0
    // negative indexes work, -1 starts from last index

    
// slice(start(include), end(not include)) - copies the part to new array
let arr2 = ["t", "e", "s", "t"];

alert( arr2.slice(1, 3) ); // e, s
alert( arr2.slice(-2) ); // s, t