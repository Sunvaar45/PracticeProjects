"use strict";

// Create a script that prompts the visitor to enter two numbers and then shows their sum.
// P.S. There is a gotcha with types.

let number1 = 0;
do
{
    if(!isFinite(number1))
    {
        alert("invalid entry. try again");
    }
    number1 = prompt("enter first number", "");

} while (!isFinite(number1))

let number2 = 0;
do
{
    if(!isFinite(number2))
    {
        alert("invalid entry, try again");
    }
    number2 = prompt("enter second number", "");

} while (!isFinite(number2))

let sum = parseInt(number1) + parseInt(number2);
alert(`sum = ${sum}`);

/* i went crazy but this is the answer
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );
*/