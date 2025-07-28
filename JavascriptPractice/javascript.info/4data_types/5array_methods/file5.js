"use strict";

// split
let names = "Executor, Raider, Recluse";

let arr = names.split(", ");
// split("") would split the string into array of letters, E,x,e,c...

for (let name of arr) {
    alert( `A message to ${name}` );
}


// join
// arr = [Executor, Raider, Recluse];
let str = arr.join(";");
alert( str ); // Executor;Raider;Recluse