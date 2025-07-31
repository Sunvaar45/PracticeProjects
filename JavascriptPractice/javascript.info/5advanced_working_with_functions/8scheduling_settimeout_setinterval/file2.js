"use strict";

/* setInterval - run func repeatedly, starting after the interval of time,
then repeat continuously at that interval */
// syntax is same
let timerId = setInterval(() => console.log(`tick`), 2000); // log "tick" every 2 sec
setTimeout(function() {
    clearTimeout(timerId);
    console.log(`Stopping...`);
}, 5000); // stop execution after 5 sec