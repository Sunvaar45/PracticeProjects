"use strict";

let condition = true
let result = condition ? value1 : value2;
// if true return value1 , if false return value2


// example for ?
let accessAllowed = (age >= 18) ? true : false;
accessAllowed = age > 18;


// multiple ?
let age = prompt('age?', 18);

let message = (age < 4) ? "baby" :
    (age < 18) ? "teenager" :
    (age < 100) ? "adult" : "undead";

alert(message);