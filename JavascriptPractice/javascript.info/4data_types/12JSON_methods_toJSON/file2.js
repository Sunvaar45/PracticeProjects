"use strict";

// excluding and transforming: replacer
// formatting: space
// let json = JSON.stringfy(value, replacer, space)
let room = {
    number: 23,
};

let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room, // referance to room
};

room.occupiedBy = meetup; // referance to meetup

// let json = JSON.stringify(meetup); // ERROR: converting circular structure to JSON

// let json = JSON.stringify(meetup, [`title`, `participants`, `place`, `name`, `number`]); // works, not expandable

let json = JSON.stringify(meetup, function replacer(key, value) { // replacer as function
    console.log(`${key}: ${value}`); // showing key value pairs

    if (key == `occupiedBy`) {
        return undefined;
    }
    else {
        return value;
    }
}, 4); // 4 space for pretty formatting
console.log(json);