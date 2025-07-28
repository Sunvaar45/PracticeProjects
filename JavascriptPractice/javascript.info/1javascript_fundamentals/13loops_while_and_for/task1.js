"use strict";

// What is the last value alerted by this code? Why?
let i = 3;

while (i) {
  alert( i-- );
} // alerts i, then decreases it. so its gonna show 1 last. then it will break because 0 is falsy