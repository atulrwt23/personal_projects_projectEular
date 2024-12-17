const positionOfPrime = 10000000000;
let primeCandidate = 7;
let i = 0;
let j = 0;

if (positionOfPrime === 1 || positionOfPrime === 2) {
    primeCandidate = positionOfPrime + 2;
    numberOfPrimes = numberOfPrimes + 1
}

if (positionOfPrime === 3) {
    primeCandidate = 6;
}

for (let numberOfPrimes = 3; numberOfPrimes < positionOfPrime; primeCandidate = primeCandidate + 1) {
    let divisor = 1;
    let numberOfFactors = 0;

    if ((primeCandidate % 6 === 1 || primeCandidate % 6 === 5) && primeCandidate % 5 !== 0) {

        while ((primeCandidate ** 0.5) >= divisor) {

            if ((primeCandidate % divisor) == 0) {
                divisor = divisor + 2;
                numberOfFactors = numberOfFactors + 1;

                if (numberOfFactors === 2) {
                    divisor = primeCandidate;
                }
            } else {
                divisor = divisor + 2;
            }
            i++
        }

        const isPrime = (numberOfFactors == 1);

        if (isPrime) {
            console.log(primeCandidate)
            numberOfPrimes++
        }
    }
    j++
}
console.log(primeCandidate - 1);
console.log(i + j);