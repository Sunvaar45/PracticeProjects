"use strict";

// spread syntax "..."

let arr = [3, 5, 1];
console.log( Math.max(arr) ); // NaN, needs a list of numbers
console.log( Math.max(...arr) ); // 5, spread expands the iterable to list of args
console.log( Math.max(...arr, 2, 10, ...[5, 4, 7]) ); // 10, can combine multiple iterables, normal values

// can be used to merge
let merged = [...arr, ...[5, 4, 7], 2, 10];
console.log(merged);

// copy an array/object
let obj = { a: 1, b: 2, c: 3 };
let objSame = obj; // referances to same contents
let objCopy = { ...obj }; // 2 different objects with same content

console.log( JSON.stringify(obj) == JSON.stringify(objCopy) ); // true (equal contents)
console.log( obj == objCopy ); // false (not referencing to same content)

obj.d = 4;
console.log( JSON.stringify(obj, null, 4) ); // obj contents changed
console.log( JSON.stringify(objCopy, null, 4) ); // objCopy contents are same as before