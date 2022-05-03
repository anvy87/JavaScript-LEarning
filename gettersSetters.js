class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    setName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("Anvesh", "Mishra", 34);
console.log(person1.fullName);
// console.log(person1.fullName());

person1.setName("Apurva", "Choudhary");
console.log(person1.firstName);