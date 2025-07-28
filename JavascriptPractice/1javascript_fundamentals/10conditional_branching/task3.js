"use strict";

let number = prompt("input number", 0);

let result;
if (number > 0)
{
    result = 1;
}
else if (number < 0)
{
    result = -1;
}
else
{
    result = 0;
}

alert(result);