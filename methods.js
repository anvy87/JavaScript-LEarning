// methods are function inside object

const person = {
    firstName: "Anvesh",
    age: 34,
    about: function() {
        console.log(`person name is ${this.firstName} and person age is ${this.age}`);
    }
}

person.about();

console.log("************************************");

function personInfo() {
    console.log(`person name is ${this.firstName} and person age is ${this.age}`);
}

const person1 = {
    firstName: "Anvesh",
    age: 34,
    about: personInfo
}
const person2 = {
    firstName: "Apurva",
    age: 33,
    about: personInfo
}
const person3 = {
    firstName: "Anvit",
    age: 4,
    about: personInfo
}

person1.about();
person2.about();
person3.about();