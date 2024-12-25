const range = function (start, end) {
  const numbers = [];
  for (let number = start; number <= end; number++) {
    numbers.push(number);
  }

  return numbers;
};

function isDivisible(num) {
  return (factor) => num % factor === 0;
}

function invert(fun) {
  return (...arg) => !fun(...arg);
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  const isNotDivisible = invert(isDivisible(num));

  return range(2, Math.sqrt(num)).every(isNotDivisible);
}

function findPrimeOf(position) {
  const allPrimes = [2];
  let num = 3;
  while (allPrimes.length !== position) {
    if (isPrime(num)) {
      allPrimes.push(num);
    }

    num++;
  }
  return allPrimes.pop();
}

function primeInPosition(position) {
  return position < 1 ? "No Prime Possible" : findPrimeOf(position);
}

console.log(primeInPosition(100));
