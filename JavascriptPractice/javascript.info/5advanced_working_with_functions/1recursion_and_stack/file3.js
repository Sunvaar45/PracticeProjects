"use strict";

// linked lists - a recursive structure
let list = {
    value:1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value:4,
                next: null
            }
        }
    }
};
console.log(list);

// split list into multiple lists
// split
let secondList = list.next.next;
list.next.next = null;

console.log(list);
console.log(secondList);

// join
list.next.next = secondList;
console.log(list);