p = require('../problem_3.js');

function primeFactorsOf12() {
  return expect(p.primeFactors(12)).toEqual([2, 2, 3]);
}

test("Prime factors of 12 are 2, 2 and 3", primeFactorsOf12);

function primeFactorsOf36() {
  return expect(p.primeFactors(36)).toEqual([2, 2, 3, 3]);
}

test("Prime factors of 36 are 2, 2, 3 and 3", primeFactorsOf36);

function primeFactorsOf13195() {
  return expect(p.primeFactors(13195)).toEqual([5, 7, 13, 29])
}

test("Prime factors of 13,195 are 5, 7, 13 and 29", primeFactorsOf13195);

function primeFactorsOf600851475143() {
  return expect(p.primeFactors(600851475143)).toEqual([71, 839, 1471, 6857])
}

test("Prime factors of 600,851,475,143 are 71, 839, 1471 and 6857", primeFactorsOf600851475143);

function largestPrimeFactor() {
  return expect(p.largestPrimeFactor(600851475143)).toEqual(6857)
}

test("Largest prime factor of 600,851,475,143 is 6857", largestPrimeFactor);
