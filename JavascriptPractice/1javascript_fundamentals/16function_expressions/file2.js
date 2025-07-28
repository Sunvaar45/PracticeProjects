"use strict";

let age = prompt("What is your age?", 18);
// conditionally declare a function
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

}
// ...use it later
welcome(); // Error: welcome is not defined


let age2 = prompt("What is your age?", 18);
let welcome2;
if (age < 18) {

  welcome2 = function() {
    alert("Hello!");
  };

} else {

  welcome2 = function() {
    alert("Greetings!");
  };

}
welcome2(); // ok now