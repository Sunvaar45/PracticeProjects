"use strict";

// string length
alert( `abc\n`.length ); // 4, \n is counted as a character

// accesing characters
let str = "Hello";

alert( str[0] ); // H
alert( str.at(0) ); // H

alert( str[-1] ); // undefined, negative index is not supported with []
alert( str[str.length - 1] ); // o, last character using length property
alert( str.at(-1) ); // o, at() supports negative indices

for (let char of str) {
    alert(char); // H, e, l, l, o
}   