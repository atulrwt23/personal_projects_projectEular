// Find the largest palindrome made from the product of two 3-digit numbers

const largestThreeDigitNum = 999;

let fistPythagoreanTriplet = largestThreeDigitNum;
let secondPalindromeFacor = largestThreeDigitNum;
let isPalindrome = true;
let i = 0

while (fistPythagoreanTriplet > 900 && isPalindrome) {
    
    while (secondPalindromeFacor > 900 && isPalindrome) {
        let palindromeCandidate = (fistPythagoreanTriplet * secondPalindromeFacor);
        let reverseOfCandidate = 0;
        let number = palindromeCandidate
        
        while (number > 1) {
            const reminder = number % 10;
            reverseOfCandidate = reverseOfCandidate * 10 + reminder;
            number = ((number - reminder) / 10);
            i++

            if (palindromeCandidate === reverseOfCandidate) {
                isPalindrome = false;
                console.log(fistPythagoreanTriplet , secondPalindromeFacor);
                console.log(palindromeCandidate);
            }
        }
        secondPalindromeFacor = secondPalindromeFacor - 1;
    }
    fistPythagoreanTriplet = fistPythagoreanTriplet - 1;
    secondPalindromeFacor = fistPythagoreanTriplet;
}
console.log(i);

