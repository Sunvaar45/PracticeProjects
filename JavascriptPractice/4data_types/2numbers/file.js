"use strict";

// more ways to write numbers
let billion = 1000000000;
billion = 1_000_000_000;
billion = 1e9; // e9 means *1000000000

let microsecond = 0.000001;
microsecond = 1e-6; // 5 zeroes to left from 1

alert( 1e-3 === 1 / 1000 );


// hex, binary and octal numbers - skipped


// toString(base) - 2 <= base <= 36 // default = 10
let num = 255;
alert( num.toString(16) ); // ff
alert( num.toString(2) ); // 11111111

123456..toString(36); // same thing


// rounding
let number = 3.2;
Math.floor(number); // 3
Math.ceil(number); // 4
Math.round(number); // 3 = nearest integer
Math.trunc(number); // 3 = removes anything after decimal

let number2 = 3.272352352;
number2.toFixed(1); // 1 number after decimal while rounding to nearest value = 3.3