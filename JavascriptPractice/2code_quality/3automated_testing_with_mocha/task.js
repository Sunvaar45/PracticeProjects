"use strict";

/*
What’s wrong in the test of pow below?

it("Raises x to the power n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

P.S. Syntactically the test is correct and passes.
*/

// multiple assertions is an it block is bad
// one assertion fails but the whole it block will produce error
describe("pow", function() {

    it("5 to the power of 1 is 5", function() {
        assert.equal(pow(5,1), 5);
    });

    it("5 to the power of 2 is 25", function() {
        assert.equal(pow(5,2), 25);
    });

    it("5 to the power of 3 is 125", function() {
        assert.eqaul(pow(5,3), 125);
    });

});
// failures are seperate and easy to diagnose