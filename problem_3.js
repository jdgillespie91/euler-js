function primeFactors(number) {
  let n = number;
  let t = 2;
  let factors = [];

  while (t <= n) {
    if (n % t === 0) {
      factors.push(t);
      n = n / t;
    } else {
      t += 1;
    }
  }

  return factors;
}

function largestPrimeFactor(number) {
  let factors = primeFactors(number);
  return factors[factors.length - 1];
}

module.exports.primeFactors = primeFactors;
module.exports.largestPrimeFactor = largestPrimeFactor;
