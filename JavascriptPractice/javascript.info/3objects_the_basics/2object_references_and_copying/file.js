"use strict";

// object referances and copying

let user = {
    name: "john",
};

// now both admin and user are holding the same referance to the same object
let admin = user;

admin.name = "pete";
alert(user.name); // pete, the object user was referring to got changed by the admin referance

// to be equal they have to referane the same object
alert(admin == user); // true
alert(admin === user); // true

let a = {};
let b = {};
alert(a == b); // false, even though both are empty, they aren't referancing the same object

