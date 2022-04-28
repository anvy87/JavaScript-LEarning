const myArray = ["hello", "cat", "dog", "lion"];

function isLength3(string) {
    return string.length === 3;
}


// const ans = isLength3("dog");
// console.log(ans)

console.log(myArray.find(isLength3));


const users = [
    { userId: 1, userName: "Anvesh" },
    { userId: 2, userName: "Apurva" },
    { userId: 3, userName: "Anvit" },
    { userId: 4, userName: "Anvitt" },
];

console.log(users.find((user) => user.userId === 3));