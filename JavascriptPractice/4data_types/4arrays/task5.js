// @ts-check
"use strict";

/*
A maximal subarray
importance: 2

The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.

If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:
*/

function getMaxSubSum(arr)
{
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++)
    {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++)
        {
            // -1,1,4,-5        -1,2,3,-9
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
            // 4
        }
    }

    return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([2, -1, 2, 3, -9]) ); // 6 