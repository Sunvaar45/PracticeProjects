"use strict";

/*
Repeat until the input is a number
importance: 5

Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”.
In that case, the function should return null.
*/

function readNumber() {
    let number;
    do {
        number = prompt("Enter a number", "");
        if (number === "" || number === null) {
            return null; // user pressed cancel or entered empty line
        }
    } while (!isFinite(number));

    return +number; // convert to number and return
}

alert(`You entered: ${readNumber()}`);
