"use strict";

// cloning nested objects with the method in line12, file2 doesn't work
// because clone.sizes = user.sizes doesn't duplicate sizes, just gives both the same referance link 
let user = {
    name: "john",
    sizes: {
        height: 185,
        width: 70,
    },
};

// structuredClone method to duplicate nested objects

let clone = structuredClone(user);

alert(user.sizes === clone.sizes); // false, different objects

// user and clone have duplicate values, but are unrelated
user.sizes.width = 60;
alert(clone.sizes.width); // still 70