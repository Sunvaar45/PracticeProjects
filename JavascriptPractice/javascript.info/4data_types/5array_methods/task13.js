"use strict";

/*
Create keyed object from array
importance: 4

Let’s say we received an array of users in the form {id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
*/

// For example:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

// create object with id as key and array items as values ,return object
function groupById(arr)
{
  // let obj = {};
  // for (let element of arr)
  // {
  //   obj[element.id = element]
  // }
  // return obj;
  
  let result = arr.reduce(function(obj, user) {
    obj[user.id] = user;
    return obj;
  }, {});
  
  return result;
}

let usersById = groupById(users);
alert( usersById[0].id ); // john
alert( usersById[1].name ); // Ann Smith


/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

/*
Such function is really handy when working with server data.

In this task we assume that id is unique. There may be no two array items with the same id.

Please use array .reduce method in the solution.
*/