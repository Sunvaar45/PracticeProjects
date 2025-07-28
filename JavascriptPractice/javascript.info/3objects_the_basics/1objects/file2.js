"use strict";

// object creating function
function makeUser(name, age, isAdmin) {
    return {
        name: name,
        age: age,
        isAdmin: isAdmin,
    };
}

let user = makeUser("John", 30, false);

// property existence
alert("name" in user); // true, user.name exists
alert("blabla" in user); // false, user.blabla doesn't exist
alert(user.blabla === "undefined"); // true, blabla doesn't exists, therefore its undefined

// for..in loop
for (let key in user)
{
    alert(key); // name, age, isAdmin

    alert(user.key); // John, 30, false
}
