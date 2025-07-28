"use strict";

// map and set
// Till now, we’ve learned about the following complex data structures:
//     Objects are used for storing keyed collections.
//     Arrays are used for storing ordered collections.

// map - keyed data items like object, but keys can be of any type
let map = new Map();
map.set("id", 1); // store value by key
map.get("id"); // return value by key
map.has("id"); // return true if key exists
map.delete("id"); // remove element by key
map.clear(); // remove everything
map.size; // return element count

// object as key
let john = {
    name: "john",
    age: 23,
};

let visitsCountMap = new Map();
visitsCountMap.set(john, 123);