"use strict";

// strings have built-in iterables
for (let char of "test") {
    console.log(char); // t, e, s, t
}

// calling the iterator explicitly
let str = "Hello";

let iterator = str[Symbol.iterator]();

while (true)
{
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}