"use strict";

// Constructor functions
    // start with capital letter
    // always executed with "new" operator

function User(name) {
    // this = {} (implicitly)

    this.name = name;
    this.isAdmin = false;

    // return this (implicitly)
}

let user = new User("Executor");

// new
    // empty object is created and assigned to "this"   
    // the function body executes, (should modify this here)
    // value of "this" is returned