"use strict";

// Set and decrease for counter
// importance: 5

// Modify the code of makeCounter() so that the counter can also decrease and set the number:

//     counter() should return the next number (as before).
//     counter.set(value) should set the counter to value.
//     counter.decrease() should decrease the counter by 1.

// See the sandbox code for the complete usage example.

// P.S. You can use either a closure or the function property to keep the current count. Or write both variants.

function makeCounter() {  
    // ... closure ...
    // let count = 0;
    // function counter() {
    //     return count++;
    // }
    // counter.set = function(newCount) {
    //     return count = newCount;
    // };
    // counter.decrease = function() {
    //     return count--;
    // };
    // return counter;

    /* function property */
    function counter() {
        return counter.count++;
    }
    counter.set = function(newCount) {
        return counter.count = newCount;
    };
    counter.decrease = function() {
        return counter.count--;
    }

    counter.count = 0;
    return counter;
}
  
let counter = makeCounter();
  
console.log( counter() ); // 0
console.log( counter() ); // 1
  
counter.set(10); // set the new count
  
console.log( counter() ); // 10
  
counter.decrease(); // decrease the count by 1
  
console.log( counter() ); // 10 (instead of 11)