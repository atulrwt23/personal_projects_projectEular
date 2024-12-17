//sum of multiples of 3 or 5 below a certain number;
// No repetation of numbers allowed;

const givenNumber = 1000;
const edgeOfnumbers = (givenNumber - 1);

//finding  number of multiples of 3 , 5 , and 3 * 5 = 15;
const multipleOfThreeInNumber = (edgeOfnumbers  - (edgeOfnumbers % 3)) / 3;
const multipleOfFiveInNumber = (edgeOfnumbers - (edgeOfnumbers % 5)) / 5;
const multipleOfFifteenInNumber = (edgeOfnumbers - (edgeOfnumbers % 15)) / 15;

// console.log(multipleOfFifteenInNumber,multipleOfFiveInNumber,multipleOfThreeInNumber);

//finding sum of the multiples by using AP formula Sn = (n / 2) * ((2 * 2) + (n - 1) * d);
const sumOfMultipleOfThree = (multipleOfThreeInNumber / 2) * ((2 * 3) + ((multipleOfThreeInNumber - 1) * 3));
const sumOfMultipleOfFive = (multipleOfFiveInNumber / 2) * ((2 * 5) + ((multipleOfFiveInNumber - 1) * 5));
const sumOfMultipleOfFifteen = (multipleOfFifteenInNumber / 2) * ((2 * 15) + ((multipleOfFifteenInNumber - 1)) * 15);

// console.log(sumOfMultipleOfFifteen,sumOfMultipleOfFive,sumOfMultipleOfThree);

//The multiples of 15 are repeated twice that's why sub the multiples of 15;
const sumAskedFor = (sumOfMultipleOfThree + sumOfMultipleOfFive) - sumOfMultipleOfFifteen;

console.log(sumAskedFor);

//Other method;

// let i = 1;
// let sum =0;
// while (i < givenNumber)  {
//     if ( i % 3 === 0 ) {
//         if ( i % 5 !== 0) {
//             sum = i + sum;
//         }
//     }
//     if (i % 5 === 0 ) {
//         sum = i + sum;
//     }
//     i++;
// }
// console.log(sum);