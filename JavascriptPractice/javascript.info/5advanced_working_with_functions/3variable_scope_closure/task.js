"use strict";

// Sum with closures
// importance: 4

// Write function sum that works like this: sum(a)(b) = a+b.

// Yes, exactly this way, using double parentheses (not a mistype).

function sum(a) {
    return function(b) {
        return a + b;
    }
}

console.log( sum(1)(2) );
console.log( sum(5)(-1) );