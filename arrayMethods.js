// important array methods

const numbers = [4, 2, 5, 6, 8];

function multiplyBy2(number, index) {
    console.log(`index is ${index} number is ${number} `);
    // console.log(number * 2);
    // console.log(`${number}*2 = ${number*2}`);
}

// multiplyBy2(numbers[0], 0);
// multiplyBy2(numbers[1], 1);
// for every number


for (let i = 0; i < numbers.length; i++) {
    multiplyBy2(numbers[i], i);
}

console.log('**********************');

numbers.forEach(multiplyBy2);

console.log('**********************');

numbers.forEach(function(number, index) {
    console.log(`index is ${index} number is ${number} `);
});


const users = [
    { firstName: "Anvesh", age: 34 },
    { firstName: "Apurva", age: 33 },
    { firstName: "Anvit", age: 4 },
]

users.forEach(function(user) {
    console.log(user.firstName);
})