class CreateUser {
    constructor(firstName, lastName, email, age, address) {
        console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about() {
        return `${this.firstName} is ${this.age} years old`;
    }
    is18() {
        return this.age >= 18;
    }
    sing() {
        return "la laa la laaa";
    }
}

const user1 = new CreateUser("anvesh", "Mishra", "a@gmail.com", 34, "Tkmg")

console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());