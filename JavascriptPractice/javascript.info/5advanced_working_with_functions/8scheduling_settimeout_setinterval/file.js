"use strict";

/* setTimeout - run func once after the interval of time */
// setTimeout(func, delay, arg1, arg2...)
function sayHi() {
    console.log("Hello");
}
setTimeout(sayHi, 1000); // 1 sec delay

// canceling with clearTimeout
let timerId = setTimeout(sayHi, 1000); // never happens
console.log(timerId);
clearTimeout(timerId); // cancelled the execution
console.log(timerId);