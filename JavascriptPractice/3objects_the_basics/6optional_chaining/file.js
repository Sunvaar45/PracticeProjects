"use strict";

// optional chaining = ?.
// value?.prop
    // = value.prop if value exists
    // returns undefined is value doesn't exist

let user = {};
alert(user?.address?.street); // undefined (no error)

let html = document.querySelector('.elem')?.innerHTML; // undefined
// ?. should only be used if its ok for something to not exist. don't overuse it


// optional chaining with ()
let admin = {
    sayAdmin() {
        alert("im admin");
    },
};

let user2 = {};

admin.sayAdmin?.(); // im admin
user2.sayAdmin?.(); // nothing


// optional chaining with []
let user3 = {
    name: "Executor",
};

let user4 = {};

alert( user3?.["name"] ); // Executor
alert( user4?.["name"] ); // undefined


// deleting with ?.
delete user3?.name; // delete user3's name if user3 exists


// ?. for reading and deleting is ok, but not for writing
let user5 = null;
user5?.name = "raider"; // error, because it evaluates to: undefined = "raider"
