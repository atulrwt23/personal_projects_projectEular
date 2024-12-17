//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const finalNumber = 100;

const sumOfnumbers = (finalNumber * (finalNumber + 1)) / 2;
const squareOfSum = sumOfnumbers * sumOfnumbers;

const sumOfSquares = (finalNumber * (finalNumber + 1) * ((finalNumber * 2) + 1)) / 6;

const differenceAskedFor = squareOfSum - sumOfSquares;

console.log(differenceAskedFor);
