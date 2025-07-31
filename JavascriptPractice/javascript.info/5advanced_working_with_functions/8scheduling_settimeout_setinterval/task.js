"use strict";
// Output every second
// importance: 5

// Write a function printNumbers(from, to) that outputs a number every second,
// starting from from and ending with to.

// Make two variants of the solution.
//     Using setInterval.
//     Using nested setTimeout.

/* setInterval */
function printNumberInterval(from, to) {
    let current = from;

    let timerId = setInterval(function() {

        // output the number and increment it
        console.log(current);
        current++;

        // stop the interval when to is reached
        if (current > to) {
            clearInterval(timerId);
        }
    }, 1000);
}

/* nestes setTimeout */
function printNumberTimeout(from, to) {
    let current = from;

    setTimeout(function tick() {

        // output the number and increment it
        console.log(current);
        current++;

        // settimeout again if to isn't reached
        if (current <= to) {
            setTimeout(tick, 1000);
        }

    }, 1000);
}

printNumberInterval(3, 7);
printNumberTimeout(3, 7);