"use strict";

// weakmap
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok"); // key must be object
    // only get, has, delete


// weakmaps get garbage collected when keys die unlike maps
let visitsCountMap = new WeakMap();

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1); 
}

let john = { name: "John" };
countUser(john);
console.log( visitsCountMap.get(john) ); // 1, as john visited

john = null; // john died
console.log( visitsCountMap.get(john) ); // undefined, as john died