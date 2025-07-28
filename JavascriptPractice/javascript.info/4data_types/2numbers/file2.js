"use strict";

// isFinite and isNan
// isNaN = converts its arg to number and checks if its NaN (between -Infinity and Infinity)
alert( isNaN("str") ); // true

// isFinite = converts its arg to number and returns true if its not NaN
alert( isFinite("15") ); // true
alert( isFinite(Infinity) ); // false, NaN


// using isFinite to validate a prompt
let num = prompt("enter number", "");
if (!isFinite(num))
{
    alert("you didn't enter a number");
    num = prompt("enter number", "");
}


// Number.isFinite and Number.isNaN are stricter versions. they only return true if arg is number and finite/NaN