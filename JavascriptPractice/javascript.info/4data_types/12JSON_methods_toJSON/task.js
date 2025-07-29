"use strict";

// Turn the object into JSON and back
// importance: 5

// Turn the user into JSON and then read it back into another variable.

let user = {
    name: "John Sekiro",
    age: 300,
};

let jsonUser = JSON.stringify(user, null, 4);
console.log( jsonUser );

let newUser = JSON.parse(jsonUser);
console.log( newUser );