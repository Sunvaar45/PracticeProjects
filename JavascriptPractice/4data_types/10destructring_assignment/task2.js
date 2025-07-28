"use strict";

// The maximal salary
// importance: 5

// There is a salaries object:
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let entriesArr = Object.entries(salaries);
    if (entriesArr.length === 0) return null;

    let maxName = "";
    let maxSalary = 0;

    for (let [name, salary] of entriesArr) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;

    // let [
    //     [key, value],
    //     [key2, value2],
    //     [key3, value3],
    // ] = entriesArr;
    // let maxSalary = Math.max(value, value2, value3);

    // if (maxSalary == value) return key;
    // if (maxSalary == value2) return key2;
    // if (maxSalary == value3) return key3;
}

console.log( topSalary(salaries) );

// Create the function topSalary(salaries) that returns the name of the top-paid person.

//     If salaries is empty, it should return null.
//     If there are multiple top-paid persons, return any of them.

// P.S. Use Object.entries and destructuring to iterate over key/value pairs.