"use strict";

require(`./file.js`);

// can run this because its global from file.js
console.log( currentUser.name );
console.log( globalThis.currentUser.name ); // safer, ensures the variable called is the global one

/* using for polyfills */
if (!globalThis.Promise) {
    console.log(`Creating custom promise constructor`);
    // globalThis.Promise = /*...*/
}