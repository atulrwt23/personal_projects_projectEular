// sum of even terms of fibbonacci series starting with 1, 2 ,3 ,5 ,8 ........;
// Code for fibbonacci series;

const numberOfterms = 10;
let firstTerm = 1;
let secondTerm = 2;
let nthTerm = 1;
let sumOfEven = 0;
let evenTermLoc = 0;

for (let loopWorking = 0; loopWorking < numberOfterms; loopWorking = loopWorking + 1) {
    nthTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nthTerm;
    
    if (firstTerm % 2 === 0) {
        sumOfEven = sumOfEven + firstTerm;
    }
}
console.log(sumOfEven);

