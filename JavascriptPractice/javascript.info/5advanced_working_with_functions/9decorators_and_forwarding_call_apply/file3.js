"use strict";

/* implement func.call with transparent caching */
let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        return x * this.someMethod();        
    },
};

function cachingDecorator(func) {
    let cache = new Map();
    
    return function(x) {
        if (cache.has(x)) {
            console.log(`Called from cache`);
            return cache.get(x);
        }

        console.log(`Called with function`);
        let result = func.call(this, x); // "this" is passed correctly
        cache.set(x, result);
        return result;
    };
}

worker.slow = cachingDecorator(worker.slow);
console.log( worker.slow(2) );
console.log( worker.slow(2) );