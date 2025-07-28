/*
    primitive datas:
        number, bigInt, string, boolean

        null = non existing object

        undefined = value not assigned
            -> let age;
            -> alert(age) => "undefined"
*/

"use strict";

let name = "Executor";

alert(`hello ${1}`); // hello 1 (number)

alert(`hello ${"name"}`); // hello name (string)

alert(`hello ${name}`); // hello Executor