"use strict";

// Destructuring assignment
// importance: 5

// We have an object:
let user = {
    name: "John",
    years: 30
};

// Write the destructuring assignment that reads:

//     name property into the variable name.
//     years property into the variable age.
//     isAdmin property into the variable isAdmin (false, if no such property)

// Here’s an example of the values after your assignment:

// your code to the left side:
let {name, years: age, isAdmin = false} = user

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false