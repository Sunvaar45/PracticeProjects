"use strict";

// rest parameters "..."
function sumAll(...args) {
    let result = args.reduce(function(sum, value) {
        return sum + value;
    }, 0);
    return result;
}
console.log( sumAll(1, 2, 3) ); // 6
console.log( sumAll(5, 10, 20, 50, 1, 7) ); // 93


function showName(firstName, lastName, ...titles) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Titles: ${titles}`);
}
showName("Donquixote", "Doflamingo", "Heavenly Demon", "Warlord of the Sea", "Fallen Celestial Dragon");
// ... puts args into an array
// ...rest always has to be the last arg

// arguments variable
function showArgs() {
    console.log( `Argument Count: ${arguments.length}` );
    
    for (let arg of arguments) {
        console.log(arg);
    }
}

showArgs("idk", "john", "sekiro", "gurarara");