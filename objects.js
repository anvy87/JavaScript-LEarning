// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects dont have index

// how to create objects

const person = { name: "Anvesh", age: 34 };
console.log(person);
console.log(typeof person);

// how to access data from objects
console.log(person.name);
console.log(person.age);


console.log(print()); // undefined

// how to add key value pair to objects

const person1 = {
    name: "Anvesh",
    age: 34,
    hobbies: ["guitar", "studying"]
}
console.log(person1);
console.log(person1.hobbies);
console.log(person1.age);

person1.gender = "male";
console.log(person1);