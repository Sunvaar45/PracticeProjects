"use strict";

// object destructuring
let options = {
    title: "menu",
    width: 100,
    height: 200,
};

// let {title, width, height} = options;
// let {width, height, title} = options; // order does not matter
// let { title } = options; // we can only assign what we need
let { title, ...rest } = options; // rest becomes a new object with values we didn't destructure
console.log(title); // menu
console.log(width); // 100
console.log(height); // 200

let {title: t = prompt("this value is missing! enter?", 0), width: w, height: h} = options;
    // assign variable names with :
    // assign default values with =
console.log(t); // menu
console.log(w); // 100
console.log(h); // 200