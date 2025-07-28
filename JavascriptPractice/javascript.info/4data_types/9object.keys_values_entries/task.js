"use strict";

// Sum the properties
// importance: 5

// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all salaries
// using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.

// For instance:
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
};

function sumSalaries(salaries) {
    let arr = Object.values(salaries);
    let sum = 0;
    for (let value of arr) {
        sum += value;
    }   
    return sum
}

console.log( sumSalaries(salaries) ); // 650