"use strict";

// Output a single-linked list
// importance: 5

// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
    // loop
    let temp = list
    let result = "";
    while (temp != null) {
        result += `${temp.value} `;
        temp = temp.next;
    }
    return result;

    // recursion
    let temp2 = list;
    if (temp2.next == null) {
        return `${temp2.value}`;
    }
    return `${temp2.value} ` + printList(temp2.next);
}

console.log( printList(list) );

// Write a function printList(list) that outputs list items one-by-one.

// Make two variants of the solution: using a loop and using recursion.

// What’s better: with recursion or without it?