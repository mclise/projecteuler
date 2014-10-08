// Project Euler
// Problem #3
//
// The sum of the squares of the first ten natural numbers is,
// 12 + 22 + ... + 102 = 385
//
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)2 = 552 = 3025
//
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var sumsDiff = function(n){
  var squareOfSums = Math.pow(((n / 2 + .5) * n), 2);
  var sumOfSquares = n * (n + 1) * (2 * n + 1) / 6;
  console.log(squareOfSums);
  console.log(sumOfSquares);
  console.log(squareOfSums - sumOfSquares);
  return (squareOfSums - sumOfSquares);
};

sumsDiff(100);

// Solution: 