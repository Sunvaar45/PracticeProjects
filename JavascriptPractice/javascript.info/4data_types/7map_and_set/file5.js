"use strict";

// iteration over a set
let set = new Set();
set.add(`orange`);
set.add(`apples`);
set.add(`bananas`);

for (let value of set)
{
    console.log(value);
}

set.forEach(function(value) {
    console.log(value);
});