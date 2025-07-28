"use strict";

// arrow functions have no "this"

let user = {
    name: "ironeye",
    shoot() {
        let arrow = () => alert(this.name);
    },
};

user.shoot(); // ironeye

// arrow uses "this" from outer method "user.shoot()"