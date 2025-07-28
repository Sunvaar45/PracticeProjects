"use strict";

/*
Create an object calculator with three methods:

    read() prompts for two values and saves them as object properties with names a and b respectively.
    sum() returns the sum of saved values.
    mul() multiplies saved values and returns the result.
*/

let calculator = {
    // ... your code ...
    read() {
        this.a = Number(prompt("enter first number", 0));
        this.b = Number(prompt("enter second number", 0));
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );