const p = require('../problem_2.js');

function trueIsTrue() {
  return expect(true).toBeTruthy();
}

test("True is true", trueIsTrue);

function falseIsFalse() {
  return expect(false).toBeFalsy();
}

test("False is false", falseIsFalse);

function solution() {
  return expect(p.sumOfEven()).toBe(4613732);
}

test("The solution is correct", solution);
