"use strict";

// object.assign usage

let user = {
    name: "john",
};

let permissionsAdmin = {
    canView: true,
    canEdit: true,
};

let permissionsUser = {
    canView: true,
    canEdit: false,
};

Object.assign(user, permissionsAdmin);


// object.assign as a duplication method

let clone = Object.assign({}, user);

alert(clone.name); // "john"