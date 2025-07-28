"use strict";

// iteration over a map
let recipeMap = new Map([
    [`cucumber`, 500],
    [`tomatoes`, 350],
    [`onion`, 50],
]);

// map.keys()
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
}

// map.values()
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}

// map.entries()
for (let entry of recipeMap.entries()) {
    console.log(entry); // [ `cucumber`, 500 ]...
}

// foreach
recipeMap.forEach(function(value, key) {
    console.log(`${key}: ${value}`); // [ `cucumber`, 500 ]...
});