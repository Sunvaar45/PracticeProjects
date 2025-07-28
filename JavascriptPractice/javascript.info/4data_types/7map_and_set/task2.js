"use strict";

/*
Filter anagrams
importance: 4

Anagrams are words that have the same number of same letters, but in different order.
*/

// For instance:
    // nap - pan
    // ear - are - era
    // cheaters - hectares - teachers

// Write a function aclean(arr) that returns an array cleaned from anagrams.

// For instance:
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {

    let map = new Map()
    for (let word of arr) {

        let key = word // Pan
            .toLowerCase() // pan
            .split(``) // [`p`,`a`,`n`]
            .sort() // [`a`,`n`,`p`]
            .join(``); // anp

        if (!map.has(key)) {
            map.set(key, word);
        }
    }

    let result = Array.from(map.values());
    return result;
}

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

// From every anagram group should remain only one word, no matter which one.