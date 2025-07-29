"use strict";

// another way to define lists
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
console.log( list );

// adding a new item to beginning of list
list = { value: 0, next: list };
console.log( list );

// remove a value from middle
list.next = list.next.next;
console.log( list );