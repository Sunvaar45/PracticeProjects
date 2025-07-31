"use strict";

/* transparent caching */
function slow(x) {
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if (cache.has(x)) { // if there is such a key
            console.log(`called with cache`);
            return cache.get(x); // read its result directly from cache
        }

        // otherwise call func and cache the result
        console.log(`called with function`);
        let result = func(x);
        cache.set(x, result);
        return result;
    };
}

slow = cachingDecorator(slow);
console.log( slow(1) );
console.log( slow(1) );
console.log( slow(2) );
console.log( slow(2) );

// ! this caching decorator can't work with object methods
// because it can't get the context of this. see next file