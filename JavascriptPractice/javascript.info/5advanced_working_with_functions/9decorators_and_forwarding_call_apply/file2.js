"use strict";

/* using func.call for context */
// func.call(obj, arg1, arg2...)
function sayHi() {
    console.log(this.name);
}
let user = { name: "John" };
let admin = { name: "Admin" };

// basically, it sets "this" as the entered obj
sayHi.call(user);
sayHi.call(admin);