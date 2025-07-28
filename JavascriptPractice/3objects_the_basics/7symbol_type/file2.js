"use strict";

// symbols in object literals

let id = Symbol("id");

let user = {
    name: "Raider",
    desc: "Gigachad class",
    [id]: 123, // this is a symbol property
};


// symbol properties are skipped in for..in loops

for (let key in user) {
    alert(user[key]); // Raider, Gigachad class
}


// Object.keys(user) also skips the symbol
alert(Object.keys(user)); // name,desc


// Object.assing does use the properties when copying/merging
let clone = Object.assign({}, user);
alert(clone[id]); // 123