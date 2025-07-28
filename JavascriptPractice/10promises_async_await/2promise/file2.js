"use strict";

// then usage = return the function result or error depending on resolve or reject

// create promise
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("result"), 1000);
});

promise.then(
    result => alert(result), // called if the promise is resolved
    error => alert(error) // called if the promise is rejected
);

// can also ignore the error
promise.then(alert) // alerts the result



// catch usage = only catch errors. same as then(null, function)

// create promise
let promise2 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error(":(")), 2000);
});

promise2.catch(alert);



// finally usage = cleanup/finalize (stop loading indicators, closing not longer needed connections...)

// create promise
let promise3 = new Promise(function(resolve, reject) {
    // execute, call resolve or reject
});

promise3.finally(() => alert("stopping loading indicators"));

promise3.then(
    result => alert(result), 
    error => alert(error)
);