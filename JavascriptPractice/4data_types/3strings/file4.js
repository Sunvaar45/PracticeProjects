"use strict";

// getting a substring - substring, slice
let str = "stringify";
alert( str.slice(0, 6) ); // "string"
alert( str.slice(2) ); // "ringify"

// comparing strings - characters are compared by their numeric code
alert( `a` > `Z` ); // true, lowercase is always bigger compared to uppercase
alert( `Österreich` > `Zealand`); // true, diacritic letters are bigger than normal letters

// str.codePointAt(pos)
alert( "Z".codePointAt(0) ); // 90, code point of "Z"
alert( "z".codePointAt(0) ); // 122
alert( "z".codePointAt(0).toString(16) ); // 7a, if we need hexadecimal representation

// String.fromCodePoint(code)
alert( String.fromCharCode(90) ); // "Z"
alert( String.fromCodePoint(0x5a) ); // "Z", can also use hexadecimal code

let str2 = "";

for (let i = 65; i <= 220; i++) {
  str2 += String.fromCodePoint(i);
}
alert( str2 );
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ