"use strict";

/*
    Replace Function Expressions with arrow functions in the code below:

    function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
    }

    ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
    );
*/

let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
    "do you agree?", 
    () => alert("You agreed"),
    () => alert("You cancelled the execution")
);