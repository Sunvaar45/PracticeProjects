"use strict";

let fruits = ["magu", "hie", "pika"];

// methods that work with end of array
alert( fruits.pop() ); // remove pika and return it
alert( fruits ); // magu, hie

fruits.push("pika"); // add arg to end of array
alert( fruits ); // magu, hie, pika


// methods that work with beginning of array
alert( fruits.shift() ); // remove magu and return it
alert( fruits ); // hie, pika

fruits.unshift("magu"); // add arg to beginning of array
alert( fruits ); // magu, hie, pika