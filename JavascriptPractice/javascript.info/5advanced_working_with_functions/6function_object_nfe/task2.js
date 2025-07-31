"use strict";

// Sum with an arbitrary amount of brackets
// importance: 2

// Write function sum that would work like this:

function sum(a) {

    // this block repeatedly adds parameters to currentSum
    let currentSum = a;
    function add(b) {
        currentSum += b;
        return add;
    }

    // this gets called when == comparison happens automatically to stop
    // appearently this is "custom object-to-primitive-conversion"
    add.toString = function() {
        return currentSum;
    };

    return add;
}

console.log( sum(1)(2) == 3); // 1 + 2 = 3
console.log( sum(1)(2)(3) == 6); // 1 + 2 + 3
console.log( sum(5)(-1)(2) == 6 );
console.log( sum(6)(-1)(-2)(-3) == 0 );
console.log( sum(0)(1)(2)(3)(4)(5) == 15 );

// P.S. Hint: you may need to setup custom object to primitive conversion for your function.