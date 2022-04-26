const numbers = [3, 4, 5, 6, 8];

const square = function(number) {
    return number * number;
}

const squareNumber = numbers.map(square);
console.log(squareNumber);

const users = [
    { firstName: "Anvesh", age: 34 },
    { firstName: "Apurva", age: 33 },
    { firstName: "Anvit", age: 4 },
]

const userNames = users.map((user) => {
    return user.firstName;
});
console.log(userNames);