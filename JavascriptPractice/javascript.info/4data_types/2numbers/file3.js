"use strict";

// parseInt and parseFloat - they return numbers stripping symbols like $, px, cm...
alert( Number("100px") ); // NaN, number conversion strict
alert( parseInt("100px") ); // 100
alert( parseFloat("12.5em") ); // 12.5

// when these fail:
alert( parseInt("a123") ); // NaN, process stops at first symbol

// parseInt(str, radix) - base of the numeral system
alert( parseInt("0xff"), 16 ); // 255


// other:
    // Math.random(), Math.Max(), Math.Min(), Math.Pow()...