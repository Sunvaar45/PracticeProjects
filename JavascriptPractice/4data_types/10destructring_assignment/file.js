"use strict";

// array destructuring
let arr = ["john", "nightreign"];

let [firstName, lastName] = arr;

console.log(firstName); // john
console.log(lastName); // nightreign

// skipping elements
let [name, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
    // skipped 2nd element (caesar) and everything after title as there is no variables

// works with any iterable like arrays, set, map...

// looping with entries
let user = {
    name: "john sekiro",
    age: 300,
};

let arr2 = Object.entries(user);
for (let [key, value] of arr2) {
    console.log( `${key}: ${value}` );
}

// rest "..."
let [name1, name2, ...rest] = ["a", "b", "c", "d", "e"];
console.log(rest); // ["c", "d", "e"]

// default values
let [element1 = 1, element2 = 2] = [5];
console.log( element1 ); // 5, from array
console.log( element2 ); // 2, from default value
