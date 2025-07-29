"use strict";

// JSON.parse
// let value = JSON.parse(str, reviver)

let numbers = [0, 1, 2, 3, 4];

numbers = JSON.parse(numbers);

console.log( Array.isArray(numbers) );