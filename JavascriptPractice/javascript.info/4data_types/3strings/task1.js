"use strict";

/*
Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

ucFirst("john") == "John";
*/

function ucFirst(str)
{
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);   
}

alert( ucFirst("abc") );