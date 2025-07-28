"use strict";

// nested destructuring
let options = {
    size: {
        width: 100,
        height: 200,
    },
    items: ["Cake", "Donut"],
    extra: true,
};

let {
    size: {
        width,
        height,
    },
    items: [item1, item2],
    title = "Menu",
} = options;

console.log(width);
console.log(height);
console.log(item1);
console.log(item2);
console.log(title);
