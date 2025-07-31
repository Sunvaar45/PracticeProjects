"use strict";

/* new function syntax */
let str = /* get function body from server */"console.log(`Hi`)";

let sayHi = new Function(str); // new Function([arg1, arg2...] function-body)
sayHi();

/* closure */
// new function only has access to global variables as its lexical environment is always global