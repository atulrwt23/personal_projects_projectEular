let dividedNumber = 600851475143;
let divisor = 2;
let i = 0;

while (dividedNumber >= divisor) {
    if (dividedNumber % divisor === 0) {
        dividedNumber = (dividedNumber / divisor);
    } else {
        divisor = divisor + 1;
    }
    i++
}
console.log(divisor , i);
