"use strict";

// find
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"},
];

let user = users.find(item => item.id == 1);
alert(user.name); // John

// you can rewrite it like this
let user2 = users.find(function(item) {
    return item.id == 1;
});

let userIndex = users.findIndex(item => item.name = "John");
alert( userIndex ); // 0

let userLastIndex = users.findLastIndex(item => item.name = "John");
alert( userLastIndex ); // 3 


// filter - similar to find but returns an array
let someUsers = users.filter(item => item.id < 3);
alert( someUsers.length ); // 2 
