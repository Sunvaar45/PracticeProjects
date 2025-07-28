"use strict";

/*
    Write an if condition to check that age is between 14 and 90 inclusively.

    “Inclusively” means that age can reach the edges 14 or 90.
*/
let age = 20;
if (age <= 90 && age >= 14)
{
    alert("age is between 14 and 90");
}


/*
    Write an if condition to check that age is NOT between 14 and 90 inclusively.

    Create two variants: the first one using NOT !, the second one – without it.
*/
let age2 = 20;
if (!(age <= 90 && age >= 14)) {}

if (age > 90 || age < 14);