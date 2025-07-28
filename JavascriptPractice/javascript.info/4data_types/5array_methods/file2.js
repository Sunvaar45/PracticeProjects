"use strict";

// concat
let arr = ["a", "b", "c"];

alert( arr.concat("d", "e", [1, 2]) ); // "a", "b", "c", "d", "e", 1, 2


// foreach
let arr2 = ["Bilbo", "Gandalf", "Nazgul"];

arr2.forEach(element => {
    alert( element ); // Bilbo, Gandalf, Nazgul
});


// searching in array
// indexOf(item, startIndex) -> look for item starting from startIndex, returns found index, otherwise -1
// lastIndexOf -> search right to left
// includes(item, startIndex) -> same thing, returns true or false
alert( arr.indexOf("a") ); // 0 