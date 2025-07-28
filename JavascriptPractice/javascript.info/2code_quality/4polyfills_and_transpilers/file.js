"use strict";

// transpilers = rewrite code to work in older machines, syntax changes

// before running the transpiler
height = height ?? 100;

// after running the transpiler
height = (height !== undefined && height !== null) ? height : 100;

// transpiler example = babel


// polyfills = adds functions if they don't exist on the version

if (!Math.trunc) { // if no such function
  // implement it
  Math.trunc = function(number) {
    // Math.ceil and Math.floor exist even in ancient JavaScript engines
    // they are covered later in the tutorial
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}

// polyfill example = core-js