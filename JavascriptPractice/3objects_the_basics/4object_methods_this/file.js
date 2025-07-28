"use strict";

// method example

let user = {
    name: "john",
    age: 30,
};

user.sayHi = () => alert("Hello");

user.sayHi(); // Hello

// or

let user2 = {
    sayHi() {
        alert("Hello");
    },
};