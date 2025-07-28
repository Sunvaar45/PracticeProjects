"use strict";

/*
Create a function randomInteger(min, max) that generates a random integer number from min to max
including both min and max as possible values.

Any number from the interval min..max must appear with the same probability.

Examples of its work:
    alert( randomInteger(1, 5) ); // 1
    alert( randomInteger(1, 5) ); // 3
    alert( randomInteger(1, 5) ); // 5

You can use the solution of the previous task as the base.
*/

function randomInteger(min, max)
{
    let rnd = min + Math.random() * (max - min + 1);
    return Math.floor(rnd);
    // Math.random() generates a number from 0 to 1
    // We scale it to the range by multiplying by (max - min + 1)
    // and then shift it to the right by adding min
    // Finally, we use Math.floor() to round down to the nearest integer
}

alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );