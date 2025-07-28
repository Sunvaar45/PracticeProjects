"use strict";

// set

/*
new Set([iterable]) - creates the set and copies values from iterable (array) to set
set.add(value) - adds a value, returns set
set.delete(value) - removes the value, returns true if value existed at calltime, otherwise false
set.has(value) - returns true if value exists, otherwise false
set.size - is the elements count
*/
// main feature is no duplicate values are allowed

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}