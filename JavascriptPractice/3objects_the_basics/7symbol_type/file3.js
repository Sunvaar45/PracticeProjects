"use strict";

// global symbols = application-wide, accesible everywhere in the code

let id = Symbol.for("id"); // read or create if absent a global symbol

let idClone = Symbol("id"); // read the global symbol by name

alert( id === idClone ); // true


// reading the symbol or the name

let sym = Symbol.for("name"); // read the global symbol
let localSym = Symbol("name");

alert( Symbol.keyFor(sym) ); // name , read the name
alert( Symbol.keyFor(localSym )); // undefined , keyFor only checks for global symbols
alert( localSym.description ); // name