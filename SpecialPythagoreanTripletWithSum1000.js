// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product a , b , c.

let fistPythagorean = 0;
let secondPythagorean = 0;
let thirdPythagorean = 0;

for (let firstCandidate = 150; firstCandidate < 500; firstCandidate = firstCandidate + 1) {
    
    for (let secondCandidate = firstCandidate + 1; secondCandidate < 500; secondCandidate = secondCandidate + 1) {
        
        if ((firstCandidate ** 2) + (secondCandidate ** 2) === ((1000 - (firstCandidate + secondCandidate)) ** 2)) {
            fistPythagorean = firstCandidate;
            secondPythagorean = secondCandidate;
            thirdPythagorean = (1000 - (firstCandidate + secondCandidate));
            firstCandidate = 500;
            secondCandidate = 500;
        }

    }

}

console.log(fistPythagorean * secondPythagorean * thirdPythagorean);