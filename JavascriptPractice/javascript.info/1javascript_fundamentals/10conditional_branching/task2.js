"use strict";

let name = prompt('What is the "official" name of JavaScript?', '');

let result;
if (name == "ECMAScript")
{
    result = "Right!";
}
else
{
    result = "Wrong!";
}

alert(result);