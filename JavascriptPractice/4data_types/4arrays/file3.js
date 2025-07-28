"use strict";

// internals - arrays are objects. they use references

// how to not use arrays
let arr = [];

// non-numeric properties
arr.test = 5;

// holes between
arr[0] = 0;
arr[1000] = 1000;

// filling the arrays in reverse order

// using for..in