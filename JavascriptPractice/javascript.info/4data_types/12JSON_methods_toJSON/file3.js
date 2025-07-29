"use strict";

// custom "toJSON"
// objects may provide built in toJSON method. stringify calls it automatically if available

let room = {
    number: 23,
    toJSON() {
        return this.number;
    },
};

let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room,
};

console.log( JSON.stringify(meetup, null, 4) ); // date's built in toJSON worked 
                                                // room's custom toJSON worked