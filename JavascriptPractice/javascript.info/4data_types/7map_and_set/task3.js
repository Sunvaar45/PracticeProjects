"use strict";

/*
Iterable keys
importance: 5

We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
*/

// But that doesn’t work:
// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// keys.push("more");

let map = new Map();
map.set("name", "John");

// let keys = [];
// for (let key of map.keys()) {
//     keys.push(key);
// }
let keys = Array.from(map.keys());
keys.push("more")

console.log(keys); // name, more