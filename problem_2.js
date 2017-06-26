exports.sumOfEven = function () {
  let sum = 0;
  let a = 1;
  let b = 2;
  let t = undefined;

  while (a < 4e6) {
    if (a % 2 === 0) {
      sum += a;
    }

    t = a + b;
    a = b;
    b = t;
  }

  return sum;
};
