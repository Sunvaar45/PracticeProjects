"use strict";

// transforming, reordering arrays

// map - return an array of results
let arr = ["1", "a2", "bc3"];
let lengths = arr.map(function(item) {
    return item.length;
});
alert( lengths ); // 1, 2, 3


// sort(fn)
let arr2 = [1, 2, 15];
arr2.sort();
alert( arr2 ); // 1, 15, 2 - sorted as strings??

// read sort's explanation too see why this works
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
arr2.sort(compareNumeric);
alert( arr2 ); // 1, 2, 15


// reverse
arr2.reverse();
alert( arr2 ); // 15, 2, 1