// odd or even 
// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     }
//     return false;
// }

function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(7));

// i/p: string, o/p: firstcharacter
function firstCharacter(anyString) {
    return anyString[0];
}
console.log(firstCharacter("myname"));

// i/p: array, target(number);  o/p: index of target if target present
function findTarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}
const myArray = [1, 3, 8, 90];
console.log(findTarget(myArray, 8));
console.log(findTarget(myArray, 90));
console.log(findTarget(myArray, 2));
