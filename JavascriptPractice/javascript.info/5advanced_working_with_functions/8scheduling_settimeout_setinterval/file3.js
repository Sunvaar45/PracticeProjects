"use strict";

// nested setTmeout instead of setInterval
let timerId = setTimeout(function tick() {
    console.log(`tick`);
    timerId = setTimeout(tick, 2000);
}, 2000);
    // more flexible
    // intervals can be set dynamically for each interval