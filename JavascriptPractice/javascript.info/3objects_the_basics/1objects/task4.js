"use strict";

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2
// P.S. Use typeof to check for a number here.

function multiplyNumeric(obj) {
    for (let key in obj)
    {
        if (typeof(obj[key]) == "number") {
            obj[key] *= 2;
        }
    }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

for (let key in menu)
{
    alert(menu[key]);
}