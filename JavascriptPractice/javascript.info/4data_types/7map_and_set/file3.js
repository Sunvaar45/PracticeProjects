"use strict";

// Object.entries: Map from object
let obj = {
    name: "John",
    age: 30,
};

let map = new Map(Object.entries(obj));
console.log(map.get(`name`)); // John

// Object.fromEntries: Object from map
let prices = Object.fromEntries([
    [`banana`, 1],
    [`orange`, 2],
    [`meat`, 4],
]);
console.log(prices.orange); // 2

let map2 = new Map();
map2.set(`banana`, 1);
map2.set(`orange`, 2);
map2.set(`meat`, 4);

let obj2 = Object.fromEntries(map2.entries());
console.log(obj.orange); // 2