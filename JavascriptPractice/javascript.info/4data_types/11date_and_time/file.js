"use strict";

// date and time
let now = new Date();
console.log( now );


// new Date(milliseconds) - starts at Jan 1st of 1970 UTC+0
let Jan01_1970 = new Date(0);
console.log( Jan01_1970 );

let Jan02_1970 = new Date(1000 * 60 * 60 * 24);
            // millisecond to sec * to minute * to hour * to day
console.log( Jan02_1970 );


// new Date(datestring)
let date = new Date("2017-01-26");
console.log( date );


// new Date(year, month, date, hours, minutes, seconds, ms)
    // year is 4 digits
    // month starts at Jan(0) and ends at Dec(11)
    // date is day of month, if absent 1 is assumed
    // if others are absent they are assumed to be 0
console.log( new Date(2011, 0, 1, 2, 0, 0, 0) );
// output is in utc+0 , turkey is in utc+2. so hours is 2 puts it to Jan 1st of 2011