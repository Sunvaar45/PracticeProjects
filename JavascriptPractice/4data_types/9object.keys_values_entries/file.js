"use strict";

let user = {
    name: "john",
    age: 30,
};

console.log( Object.keys(user) ); // ["name", "age"]
console.log( Object.values(user) ); // ["john", 30]
console.log( Object.entries(user) ); // [ ["name", "john"], ["age", 30] ]


// transforming objects - using map, filter, ... (array methods)
// If we’d like to apply them, then we can use Object.entries followed by Object.fromEntries:

//     Use Object.entries(obj) to get an array of key/value pairs from obj.
//     Use array methods on that array, e.g. map, to transform these key/value pairs.
//     Use Object.fromEntries(array) on the resulting array to turn it back into an object.
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let pricesArr = Object.entries(prices);
let doublePricesArr = pricesArr.map(function(price) {
    return [price[0], price[1] * 2];
});

let doublePrices = Object.fromEntries(doublePricesArr);
console.log(doublePrices);