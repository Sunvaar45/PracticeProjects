"use strict";

// reviver usage:

// stringified meetup object from the server
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str);
console.log( meetup); // date is shown as string

meetup = JSON.parse(str, function(key, value) {
    if (key == `date`) return new Date(value);
    return value;
});
console.log( meetup ); // date is now date object
