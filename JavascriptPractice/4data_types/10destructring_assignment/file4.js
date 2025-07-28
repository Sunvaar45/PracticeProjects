"use strict";

// smart function parameters
function showMenu({
    title = "Untitled",
    width: w = 100,
    height: h = 200,
    items: [item1, item2] = ["item1", "item2"],
} = {}) { 
    console.log( `${title}: width = ${w}, height = ${h}` );
    console.log( `Order: ${item1}, ${item2}` );
}

let options = {
    title: "My Menu",
    items: ["tea", "pie"],
};

showMenu(options);
// title and items are taken from object
// width and height are taken from default value

showMenu();
// show default menu, whole object as arg is = {} as default. empty object gets default values