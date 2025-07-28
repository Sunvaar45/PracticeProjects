"use strict";

/*
1.
Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

    First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

    Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

2.
Then add the method addMethod(name, func) that teaches the calculator a new operation.
It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *, division / and power **:

    let powerCalc = new Calculator;
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    let result = powerCalc.calculate("2 ** 3");
    alert( result ); // 8

    No parentheses or complex expressions in this task.
    The numbers and the operator are delimited with exactly one space.
    There may be error handling if you’d like to add it.

*/

function Calculator() {

    this.methods = {
        "+": function(a, b) { return a + b },
        "-": function(a, b) { return a - b },
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
    
    this.calculate = function(str) {
        let arr = str.split(` `);
        let num1 = +arr[0];
        let operator = arr[1];
        let num2 = +arr[2];

        if (!this.methods[operator]) return NaN;

        return this.methods[operator](num1, num2);
    };
}

let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10
alert( calc.calculate("1 - 5") ); // -4

calc.addMethod("*", (a, b) => a * b);
alert( calc.calculate("4 * 3") ); // 12

calc.addMethod("/", (a, b) => a / b);
alert( calc.calculate("10 / 5") ); // 2