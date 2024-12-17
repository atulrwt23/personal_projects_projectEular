let triangularNumber = 0

for (let checkTill = 10; checkTill > 0; checkTill--) {
    triangularNumber = (checkTill * (checkTill + 1)) / 2;
    let divisor = (triangularNumber / 2) - ((triangularNumber / 2) % 1);
    let numberOfDivisors = 0;
    while (divisor > 0) {
        if (triangularNumber % divisor === 0) {
            numberOfDivisors++;
        }
        divisor--;
    }
}
i
f (numberOfDivisors > 500) {
    console.log(triangularNumber)
}