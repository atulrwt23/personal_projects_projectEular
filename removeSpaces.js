// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "     spaces at the start and the end  ";
// Remove spaces at the start and end of the given string
// If string = " spaces at the start and the end "
// Then print "spaces at the start and the end"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// Input            output
//" p"              "p"
//" p "             "p"
//"b "              "b"
//" -"              "-"

// string[0] === "";
// newString = newString + string[i + 1];
// string[stringLength - 1] === "";

let newString = "";
let stringLength = string.length;
let newStringLength = 0;

// for (let stringIndex = 0; stringIndex < stringLength; stringIndex++) {
//     if(newString.length === 0) {
//         if (string[stringIndex] !== " ") {
//             newStringLength = 1;
//         }
//         if (string[stringLength - 1] === " ") {
//             stringLength--;
//         }
//     }
//     if(newStringLength !== 0) {
//         newString = newString + string[stringIndex];
//     }
// }
//  console.log(newString);

let stringIndex = 0;

while (stringIndex < stringLength) {
    
    if (string[stringIndex] !== " ") {
        newStringLength = 1;
    }
    
    if (string[stringLength - 1] === " ") {
        stringLength--;
    }

    if(newStringLength !== 0) {
    newString = newString + string[stringIndex];
    }  
    
    stringIndex = stringIndex + 1;
}

 console.log(newString);