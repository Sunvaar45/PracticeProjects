"use strict";

// declare
let arr = new Array();
let arr2 = [];

let fruits = ["mera", "gura", "ope"];
alert( fruits.length ); // 3
alert( fruits ); // mera, gura, ope
alert( fruits[0] ); // mera

// multiple types
let arr3 = [
    "this is str",
    { name: "this is objects name" },
    true, // this is boolean
    () => alert("this is function"),
];

// get last value easily - at
alert( fruits.at(-1) ); // ope
alert( fruits[-1] ); // undefined