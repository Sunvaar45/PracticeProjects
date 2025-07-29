"use strict";

// JSON - output complex objects as strings

// JSON.stringify
let student = {
    name: "John",
    age: 20,
    isAdmin: false,
    courses: [`html`, `css`, `js`],
    spouse: null,

    sayHi() {             // ignored by JSON
        console.log(`Hello`); 
    },
    something: undefined, // ignored by JSON
    [Symbol("id")]: 123,  // ignored by JSON
};

let json = JSON.stringify(student, null, 4);
console.log( typeof(json) ); // string
console.log( json ); // {"name":"John","age":20,"isAdmin":false,"courses":["html","css","js"],"spouse":null}