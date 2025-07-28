"use strict";

describe("pow", function() {

    // adding it tests manually
    // it("2 raised to power 3 is 8", function() {
    //    assert.equal(pow(2, 3), 8);
    // });

    // it("3 raised to power 4 is 81", function() {
    //     assert.equal(pow(3,4), 81);
    // })


    // adding nested automatic tests with loop
    describe("raises x to power 3", function() {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power of 3 is ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 10; x++) {
            makeTest(x);
        }
    });


    // before , after usage
    // alerting with before after produces error. this is for demonstration
    describe("test", function() {

        before(() => alert("Testing started"));
        after(() => alert("Testing finished"));
        
        beforeEach(() => alert("Before a test"));
        afterEach(() => alert("After a test"));

        it(`1`, function() {
            alert("test 1");
        });

        it(`2`, () => alert("test 2"));
    
    });


    // NaN tests
    describe("the power needs to be positive integer", function() {

        it("for negative n the result is NaN", function() {
            assert.isNaN(pow(2, -1));
        });

        it("for non-integer n the result is NaN", function() {
            assert.isNaN(pow(2, 1.5));
        });
    });

    // ... more tests here
});