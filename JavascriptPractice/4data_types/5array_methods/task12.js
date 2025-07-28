"use strict";

/*
Filter unique array members
importance: 4

Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.
*/

// For instance:
function unique(arr) {
    
    /* your code */
    // create empty array, push the elements of the arr if !includes
    let result = [];

    for (let element of arr)
    {
        if (!result.includes(element)) 
        {
            result.push(element);
        }
    }
    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O