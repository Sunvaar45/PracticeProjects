"use strict";

// Recursion - calling to self
// (1) base case - fullfill conditions -> do what needs to be done
// (2) everything else - can't fulfill conditions -> recall function

// iterative thinking
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
console.log( pow(2,4) ); // 16

// recursive thinking
function powR(x, n) {
    if (n == 1) {
        return x;
    }
    else {
        return x * powR(x, n - 1);
    }
}
console.log( powR(2,4) ); // 16
// For example, to calculate powR(2, 4) the recursive variant does these steps:
//     pow(2, 4) = 2 * pow(2, 3)
//     pow(2, 3) = 2 * pow(2, 2)
//     pow(2, 2) = 2 * pow(2, 1)
//     pow(2, 1) = 2