"use strict";

// recursive traversal
let company = {
    sales: [{
        name: "john",
        salary: 1000,
    }, {
        name: "alice",
        salary: 1600,
    }],

    development: {
        sites: [{
            name: "peter",
            salary: 2000,
        }, {
            name: "alex",
            salary: 1800,
        }],

        internals: [{
            name: "jack",
            salary: 1300,
        }],
    },
};

function sumSalaries(department) {
    if (Array.isArray(department)) { // if its array(department) go trough all objects and add salaries to prev
        return department.reduce(function(prev, current) {
            return prev + current.salary;
        }, 0)
    }
    else { // its not array so get all sub objects and call the function again for all of them and return their values to sum
        let sum = 0;
        for (let subDepartment of Object.values(department)) {
            sum += sumSalaries(subDepartment);
        }
        return sum;
    }
}

console.log( sumSalaries(company) ); // 7700