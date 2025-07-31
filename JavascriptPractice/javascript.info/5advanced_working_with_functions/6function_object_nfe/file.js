"use strict";

/* name and length property */

/* custom properties */
function sayHi() {
    console.log("Hi");
    sayHi.counter++;
}
sayHi.counter = 0; // initial value
sayHi();
sayHi();
console.log(sayHi.counter); // 2
    // this is different then variables defined with let

// custom properties instead of closure
function makeCounter() {
    // instead of let counter = 0;
    
    function counter() {
        return ++counter.count;
    }
    counter.count = 0;
    return counter;
}

let counter = makeCounter();
counter.count = 10; // can access it unlike closure
console.log( counter() );
console.log( counter() );
console.log( counter() );