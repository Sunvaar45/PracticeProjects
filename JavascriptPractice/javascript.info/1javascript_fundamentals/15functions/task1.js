"use strict";

/*
    function checkAge(age)
    {
        if (age > 18) {
            return true;
        } else {
            return confirm('Did parents allow you?');
        }
    }

    Rewrite it, to perform the same, but without if, in a single line.

    Make two variants of checkAge:
        A) Using a question mark operator ?
        B) Using OR ||
*/

let age = prompt("Enter your age:", 0);

function checkAgeA(age)
{
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAgeB(age)
{
    return (age > 18) || confirm('Did parents allow you?');
}