"use strict";

/* going multi argument and func.apply */
let worker = {
    slow(min, max) {
        return min + max;
    },
};

function cachingDecorator(func, hash) {
    let cache = new Map();

    return function() {
        let key = hash(arguments);
        if (cache.has(key)) {
            console.log(`Called from cache`);
            return cache.get(key);
        }

        console.log(`Called with function, args: ${key}`);
        // let result = func.call(this, ...arguments);
        let result = func.apply(this, arguments);

        cache.set(key, result);
        return result;
    };
}

function hash(args) {
    // return args[0] + "," + args[1];
    // Method borrowing - better hash
    return [].join.call(args);
        // arguments.join() but arguments is not an array, it doesnt have this method
        // we borrow join from empty array and put arguments as context
}

worker.slow = cachingDecorator(worker.slow, hash);
console.log( worker.slow(3, 5) );
console.log( worker.slow(3, 5) );