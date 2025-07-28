"use strict";

// cloning and merging, object.assign

let user = {
    name: "john",
    age: 30,
};

let clone = {};

for (let key in user) {
    clone[key] = user[key];
}

clone.name = "pete";
alert(user.name); // john, clone referance changed a duplicate object to pete
// user and clone are same, but they are referancing to different object, thus they are not equal. 
// the object is duplicated