"use strict";

/*
    Write the code which outputs prime numbers in the interval from 2 to n.

    For n = 10 the result will be 2,3,5,7.

    P.S. The code should work for any n, not be hard-tuned for any fixed value.
*/

let result = '';
let isPrime;
let n = prompt('Enter number', '');
for (let i = 2; i <= n; i++)
{
    // check if i is prime number by dividing the number to everything except to itself and 1
    isPrime = true;
    for (let j = i - 1; j > 1; j--)
    {
        if (i % j == 0)
        {
            isPrime = false;
            break;
        }
    }

    // add the number to the result string if isPrime
    if (isPrime)
    {
        result += String(i) + ' ';
    }
}
alert(result);