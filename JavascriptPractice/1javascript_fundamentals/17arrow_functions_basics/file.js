"use strict";


// arrow functions:
let func1 = (arg1, arg2, argN) => expression;


//short version of function expressions:
let func = function(arg1, arg2, argN)
{
    return expression;
};


// can be created dynamically
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();


