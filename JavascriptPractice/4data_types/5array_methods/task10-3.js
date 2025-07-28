"use strict";

/*
Shuffle an array
importance: 3

Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements.
*/

// For instance:
let arr = [1, 2, 3];

// your code - FISHER YATES
function shuffle(array)
{
    // iterate trough the array starting from end
    for (let i = array.length - 1; i > 0; i--)
    {
        // get a random index under the index currently iterating
        let rndIndex = Math.floor(Math.random() * (i + 1));

        // swap their values
        let temp = array[i];
        array[i] = array[rndIndex];
        array[rndIndex] = temp;
    }
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