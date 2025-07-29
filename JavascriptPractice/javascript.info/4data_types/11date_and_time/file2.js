"use strict";

// getFullYear() - 4 digit
// getMonth() - from 0 to 11
// getDate() - from 1 to 31
// getHours(), getMinutes(), getSeconds(), getMilliseconds()
// getDay() - from 0 (sunday) to 6 (saturday)

// all methods above have getUtc... counterparts which are in UTC+0

// 2 special ones without UTC+0 variants
// getTime() - returns milliseconds passed from Jan 1st of 1970 UTC+0
// getTimezoneOffset() - Returns the difference between UTC+0 and local time zone in minute
let offset = new Date()
console.log( offset.getTimezoneOffset() );