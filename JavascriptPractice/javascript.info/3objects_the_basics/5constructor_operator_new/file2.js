"use strict";

// return in constructors

function User() {
    
    this.name = "Recluse";
    
    return { name: "Executor" }; // return this object overriding "this"
}

alert( new User().name ); // Executor


// methods in constructors

function User2(name) {
    this.name = name;

    this.sayHi = function() {
        alert( "My name is" + this.name );
    };
}

let crucible = new User("Executor");
crucible.sayHi(); // My name is Executor