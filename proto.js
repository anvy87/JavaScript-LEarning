const userMethods = {
    about: function() {
        return `${this.firstName} is ${this.age} years old`
    },
    is18: function() {
        return this.age >= 18;
    },
    sing: function() {
        return 'tun nan na'
    }
}

function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser("anvesh", "mishra", "anvesh87@gmail.com", 34, "my address");
const user2 = createUser("apurva", "mishra", "apurva88@gmail.com", 33, "her address");

console.log(user1.about());
console.log(user1.sing());
console.log(user1);