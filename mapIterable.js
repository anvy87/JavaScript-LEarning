// const person = new Map();
// person.set('firstName', 'Anvesh');
// person.set('age', 10);
// person.set(1, 'one');

// // console.log(person);
// // console.log(person.get('firstName'));
// // console.log(person.get('age'));
// // console.log(person.get(1));
// // console.log(person.keys());
// // for (let key of person.keys()) {
// //     console.log(key, typeof key);
// // }

// for (let key of person) {
//     console.log(typeof key);
// }


const person1 = {
    id: 1,
    firstName: "Anvesh"
}

const userInfo = new Map();
userInfo.set(person1, { age: 30, gender: ' Male' });
console.log(userInfo);
console.log(person1.id);

// const person = new Map([
//     ['firstName', 'Anvesh'],
//     ['age', 34]
// ])
// console.log(person);