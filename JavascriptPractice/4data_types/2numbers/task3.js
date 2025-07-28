"use strict";

/*
The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

Examples of its work:
    alert( random(1, 5) ); // 1.2345623452
    alert( random(1, 5) ); // 3.7894332423
    alert( random(1, 5) ); // 4.3435234525
*/


function random(min, max) {
    return min + Math.random() * (max - min);
    // Math.random() generates a number from 0 to 1
    // We scale it to the range by multiplying by (max - min)
    // and then shift it to the right by adding min
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );