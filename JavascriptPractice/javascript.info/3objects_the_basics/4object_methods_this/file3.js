"use strict";

// you can define "this" without an object
function sayHi() {
    alert(this.name);
}

let user = {
    name: "john",
};

user.f = sayHi; // added the method to user object
user.f(); // "john", (this == user)

sayHi(); // undefined, this.name doesn't exist