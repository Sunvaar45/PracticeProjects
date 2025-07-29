"use strict";

// Fibonacci numbers
// importance: 5

// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

// First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

// Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

// Write a function fib(n) that returns the n-th Fibonacci number.

// An example of work:

function fib(n) {
    /* your code */
    // recursive 1 - linked list
    let list = {
        value: 1,
        next: {
            value: 1,
            next: null
        }
    };

    for (let i = 0; i < n - 2; i++) {
        list = { value: list.value + list.next.value, next: list };
    }
    
    return list.value;

    // recursive 2
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

// P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second.