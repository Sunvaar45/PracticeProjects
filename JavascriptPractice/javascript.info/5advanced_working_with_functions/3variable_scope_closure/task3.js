"use strict";

// Sort by field
// importance: 5

// We’ve got an array of objects to sort:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

// The usual way to do that would be:

// by name (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // by age (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);

// Can we make it even less verbose, like this?

// users.sort(function(user1, user2) {
//     return user1.age - user2.age;
// });
// console.log(users);

function byField(str) {
    return function(user1, user2) {
        if (str == `age`) {
            return user1[str] - user2[str];
        }
        else {
            return user1[str].localeCompare(user2[str]);
        }
    }
}

users.sort(byField('name'));
console.log( users );

users.sort(byField('age'));
console.log( users );

// So, instead of writing a function, just put byField(fieldName).

// Write the function byField that can be used for that.