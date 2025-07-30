"use strict";

/* code blocks - {} */
{
    let message = `Hello`; // only visible in this code block
    console.log( message ); // Hello
}
// console.log( message ); // error, message undefined

{
    let message = `Goodbye`; // same name variable, no error
    console.log( message ); // Goodbye
}

/* nested functions */
function sayHiBye(firstName, lastName) {

    // helper nested function
    function getFullName() {
        return `${firstName} ${lastName}`;
    }

    console.log(`Hello, ${getFullName()}`);
    console.log(`Bye, ${getFullName()}`);
}

// returning functions with nested functions
function makeCounter() {
    let count = 0;
    
    return function() {
        return ++count;
    };
}
let counter = makeCounter(); // counter is now a function that can access the same outer variables as before
console.log( counter() );