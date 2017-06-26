function trueIsTrue() {
  return expect(true).toBeTruthy();
}

test("True is true", trueIsTrue);

function falseIsFalse() {
  return expect(false).toBeFalsy();
}

test("False is false", falseIsFalse);
