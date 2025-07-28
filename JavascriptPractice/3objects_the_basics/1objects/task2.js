"use strict";

/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:
*/

function isEmpty(obj)
{
    // MY SOLUTION:
    // let i = 0;
    // for (let key in obj) {
    //     i++;
    // }

    // if (i === 0) {
    //     return true;
    // }
    // return false;

    // javascript.info SOLUTION:    
    for (let key in obj) {
        return false; // if the loop started, object isn't empty
    }
    return true;
}

let object = new Object();
alert(isEmpty(object));