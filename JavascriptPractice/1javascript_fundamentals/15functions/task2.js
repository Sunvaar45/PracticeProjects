"use strict";

//Write a function min(a,b) which returns the least of two numbers a and b.

function min (a, b)
{
    // if (a < b)
    // {
    //     return a;
    // }
    // return b;

    return a < b ? a : b;
}
alert(min(2,3));

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x, n)
{
    if (n < 1) return `${n} is not supported`;

    let result = x;
    for (let i = 1; i < n; i++)
    {
        result *= x;
    }
    return result;
}

alert(pow(2,3));