"use strict";

/*
function LoadScript(src, callback)
{
    // Create a script element
    // Set its src attribute to the provided URL
    let script = document.createElement('script');
    script.src = src;

    // Set the onload handler to call the callback with no error when the script loads successfully
    script.onload = () => callback(null, script);

    // Set an error handler to call the callback with an error if the script fails to load
    script.onerror = () => callback(new Error("Failed to load script: " + src));

    document.head.append(script);
}
*/

// rewriting callbacks from previous chapter with promises
function LoadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));

        document.head.append(script);
    });
}

// usage
let promise = LoadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promise.then(
    script => alert(`${script.src} is loaded`),
    error => alert(`Error: ${error.message}`)
);