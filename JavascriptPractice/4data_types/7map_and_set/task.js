"use strict"

/*
Filter unique array members
importance: 5

Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.
*/

// For instance:
function unique(arr) {
    /* your code */

    // let set = new Set();
    // arr.forEach(function(item) {
    //     set.add(item);
    // });

    // let uniqueArray = [];
    // set.forEach(function(item) {
    //     uniqueArray.push(item);
    // });

    // return uniqueArray;

    let set = new Set(arr);
    let uniqueArr = Array.from(set);
    return uniqueArr;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare, Krishna, :-O

/*
P.S. Here strings are used, but can be values of any type.

P.P.S. Use Set to store unique values.
*/