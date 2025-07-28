"use strict";

// returns the first defined (!= null && != undefined) value. if there are no defined values returns the last value
let a = null;
let b = "not null";
let result = a ?? b; // "not null"


// usecase example
let user = prompt("username?", '');
user = user ?? 'Anonymous';
alert(user);


// similar to || (checks for the first truthy value) can be used to check first defined value
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder (?? skips undefined and null only)
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder (|| skips 0 , empty strings, null, undefined (every falsy))