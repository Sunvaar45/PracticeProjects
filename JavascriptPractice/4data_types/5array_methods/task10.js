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
function getRandomValue(min, max)
{
    let rnd = Math.random() * (max - min) + min;
    return Math.floor(rnd);
}

function shuffle(array)
{
    let shuffleAmount = 20;

    for (let i = 0; i < shuffleAmount; i++)
    {
        let rndIndex1 = getRandomValue(0, array.length);
        let rndIndex2 = getRandomValue(0, array.length);

        let temp = array[rndIndex1];
        array[rndIndex1] = array[rndIndex2];
        array[rndIndex2] = temp;
    }

    return array;
}

alert( shuffle(arr));
// arr = [3, 2, 1]

alert( shuffle(arr));
// arr = [2, 1, 3]

alert( shuffle(arr));
// arr = [3, 1, 2]
// ...

/*
All element orders should have an equal probability.
For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc,
with equal probability of each case.
*/