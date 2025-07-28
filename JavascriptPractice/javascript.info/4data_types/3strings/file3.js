"use strict";

// searching for a substring
let str = `Widget with id`;

alert( str.indexOf("Widget") ); // 0, the position of the substring
alert( str.indexOf("widget") ); // -1, not found, case-sensitive
alert( str.indexOf("id") ); // 1, from Widget

alert( str.indexOf("id", 2) ); // 12, starts searching from position 2

// finding all occurences - indexOf
let str2 = `As sly as a fox, as strong as an ox`;
let target = `as`;
let pos = 0;
while (true) {
    let foundPos = str2.indexOf(target, pos);
    if (foundPos == -1) break; // not found

    alert(`Found at ${foundPos}`);
    pos = foundPos + 1; // continue the search from the next position
}

// if with indexOf
let str3 = `Widget with id`;
if (str3.indexOf("Widget") != -1) {
    alert("Found it!");
}

// includes, startsWith, endsWith
let str4 = "Widget with id";

alert( str4.includes("Widget") ); // true
alert( str4.startsWith("Wid") ); // true
alert( str4.endsWith("id") ); // true