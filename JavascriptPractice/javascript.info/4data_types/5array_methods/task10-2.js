"use strict";

/*
Shuffle an array
importance: 3

Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements.
*/

// For instance:
let arr = [1, 2, 3];

// your code
function getValueBetween(min, max)
{
    let rnd = Math.random() * (max - min) + min;
    return rnd;
}

function shuffle(array)
{
    array.sort(function() {
        return getValueBetween(-1, 1);
    });
}

shuffle(arr);
alert( arr );
// arr = [3, 2, 1]

shuffle(arr);
alert( arr );
// arr = [2, 1, 3]

shuffle(arr);
alert( arr );
// arr = [3, 1, 2]
// ...

/*
All element orders should have an equal probability.
For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc,
with equal probability of each case.
*/