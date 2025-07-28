"use strict";

/*
Sort users by age
importance: 5

Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
*/

// For instance:
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(users) {
    users.sort(function(user1, user2) {
        return user1.age - user2.age;
    });
}

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete