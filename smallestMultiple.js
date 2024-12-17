// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?

const largestFactor = 20;
let lcmCandidate = largestFactor;
let i = 0;
let j = 0

for (let secondNumber = 11; secondNumber < largestFactor; secondNumber = secondNumber + 1) {
    const increaseInLCM = lcmCandidate
    
    while (lcmCandidate % secondNumber !== 0) {
        lcmCandidate = lcmCandidate + increaseInLCM;
        j++
    }
    i++
}
console.log(lcmCandidate);
console.log(i + j);