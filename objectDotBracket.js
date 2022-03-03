// difference between dot and bracket notation

const person = {
    name: "Anvesh",
    age: 34,
    "person hobbies": ["guitar", "sleeping"]
}

console.log(person["person hobbies"]);

const key = "email";
person.key = "anvesh87@gmail.com";
console.log(person);

person[key] = "anvesh@gmail.com";
console.log(person);