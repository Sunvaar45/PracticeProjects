"use strict"

let user = {
    name: "Artorias",
    age: 200,
    isAdmin: false,
    "likes sif": true,
};

alert(user.name);

// works with variables too
alert(user["likes sif"]);

user.isAdmin = true;

delete user.age;