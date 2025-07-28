"use strict";

// Array.from
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2,
};

let arr = Array.from(arrayLike);

arr.forEach(function(element) {
    console.log(element);
});
console.log(arr.length);