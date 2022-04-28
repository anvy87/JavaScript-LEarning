const firstName = "Anvesh";
for (let char of firstName) {
    console.log(char);
}

const items = ['item1', 'item2', 'item3'];
for (let item of items) {
    console.log(item);
}

// const users = { 'key1': 'value1', 'key2': 'value2' };
// for (let item of users) {
//     console.log(item);
// }                             // not iterable


// array like object
// jinke paas length property hoti hai
// aur jinko hum index se access kar sakte hai
// e.g. string

console.log(firstName.length);
console.log(firstName[2]);