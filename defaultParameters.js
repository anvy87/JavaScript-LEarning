// function addTwo(a, b) {
//     if (typeof b === "undefined") {
//         b = 0;
//     }
//     return a + b;
// }

function addTwo(a, b = 0) {
    return a + b;
}
const ans = addTwo(4, 8);
console.log(ans);

// rest parameters

function myFunc(a, b, c) {
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)

}
myFunc(3, 5, 7);

function addAll(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total = total + number;
    }
    return total;
}
const Ans = addAll(2, 4, 5, 6, 7, 8, 9, 4, 3, 2);
console.log(Ans);
