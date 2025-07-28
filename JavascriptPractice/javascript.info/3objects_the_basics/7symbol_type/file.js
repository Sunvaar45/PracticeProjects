"use strict";

// let id = Symbol();
let id = Symbol("id"); // id is the symbol description

// id's don't convert to string automatically
alert(id); // error
alert(id.toString()); // Symbol(id)
alert(id.description); // id

// "hidden" properties
let user = {
    name: "Executor",
};

let id2 = Symbol("id2");
user[id2] = 1;
alert( user[id2] ); // 1
// alert( user.id2 ) = undefined, "id2" is not a string property. its a symbol so user.id2 doesn't exist
// adding symbols as a key keeps scripts from interfering with each other