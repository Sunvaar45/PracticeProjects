"use strict";

/*
Sum input numbers
importance: 4

Write the function sumInput() that:

    Asks the user for values using prompt and stores the values in the array.
    Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
    Calculates and returns the sum of array items.

P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

function sumInput()
{
    let num = 0;
    let arr = [];
    while (true)
    {
        num = prompt("enter number", 0);
        
        if (num === null || num === undefined || !isFinite(num))
        {
            break;
        }
            
        arr.push(+num); 
    }

    let sum = 0;
    for (let num of arr)
    {
        sum += num;
    }
    return sum
}

alert( sumInput() );