"use strict";

/*
Is it possible to create functions A and B so that new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
*/

let placeholder = {}

function A() {
    return placeholder;
}

function B() {
    return placeholder;
}

let a = new A();
let b = new B();

alert( a == b ); // true