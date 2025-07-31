"use strict";

/* NFE - Named Function Expression */
let sayHi = function func(who) {
    if (who) {
        console.log(who);
    }
    else {
        func("Guest"); // sayHi("Guest") works but sayHi can change so this is safer 
    }
}

let welcome = sayHi;
sayHi = null;
welcome(); // would throw error if we wrote with sayHi("Guest") in else block

// sayHi and welcome are variables
// func is internal function name, a way for function to call itself reliably