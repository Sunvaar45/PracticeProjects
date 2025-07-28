"use strict";

// promise syntax
let promise = new Promise(function(resolve, reject) {
    // executor
});

// succesful promise
let promiseResolved = new Promise(function(resolve, reject) {

    // after 1 second, resolve and get "done" as result
    setTimeout(() => resolve("done", 1000));

});

// rejected promise
let promiseRejected = new Promise(function(resolve, reject) {

    // after 1 second, reject and get an error as result
    setTimeout(() => reject(new Error(":(")), 1000);

});
