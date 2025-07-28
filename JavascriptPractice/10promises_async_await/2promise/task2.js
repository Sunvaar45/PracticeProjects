"use strict";

/*
The built-in function setTimeout uses callbacks. Create a promise-based alternative.

The function delay(ms) should return a promise.
That promise should resolve after ms milliseconds, so that we can add .then to it, like this:
*/

function delay(ms) {

    // your code
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("done"), ms);
    });

    return promise;
}

delay(3000).then(result => alert(`${result} after 3 seconds`));