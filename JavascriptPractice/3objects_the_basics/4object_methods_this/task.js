"use strict";

/*
Here the function makeUser returns an object.

What is the result of accessing its ref? Why?
*/

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result? // ERROR

// right way
function makeUser2() {
    return {
        name: "John",
        ref() {
            return this; // this is not undefined. its already referencing to the object literal
        },
    }
}

let user2 = makeUser2();

alert(user.ref().name); // John