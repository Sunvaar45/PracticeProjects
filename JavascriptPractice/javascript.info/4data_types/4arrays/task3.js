"use strict";

/*
Calling in an array context
importance: 5

What is the result? Why?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?
*/

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?
// a, b, function() { alert( this ); }