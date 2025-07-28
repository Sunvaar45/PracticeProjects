"use strict";

// "this" in methods

let user = {
    name: "john",
    age: 30,

    sayHi() {
        // "this" is the "current object" = user
        alert(this.name);
    }   
};

user.sayHi(); // john